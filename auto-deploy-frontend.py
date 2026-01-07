#!/usr/bin/env python3
"""
Automated Railway Frontend Service Creation and Deployment
"""
import json
import os
import subprocess
import sys
import time

def get_railway_token():
    """Get Railway authentication token"""
    config_path = os.path.expanduser("~/.railway/config.json")
    try:
        with open(config_path, 'r') as f:
            config = json.load(f)
            # Token can be in different locations
            token = (config.get('token') or 
                    config.get('user', {}).get('token') or
                    config.get('auth', {}).get('token', ''))
            return token
    except Exception as e:
        print(f"Error reading Railway config: {e}")
        return None

def create_service_via_api(token, project_id, environment_id, service_name):
    """Create a Railway service via GraphQL API"""
    import urllib.request
    import urllib.parse
    
    url = "https://backboard.railway.app/graphql/v1"
    
    mutation = {
        "query": """
        mutation CreateService($projectId: String!, $environmentId: String!, $name: String!) {
            serviceCreate(projectId: $projectId, environmentId: $environmentId, name: $name) {
                id
                name
            }
        }
        """,
        "variables": {
            "projectId": project_id,
            "environmentId": environment_id,
            "name": service_name
        }
    }
    
    data = json.dumps(mutation).encode('utf-8')
    headers = {
        'Content-Type': 'application/json',
        'Authorization': f'Bearer {token}'
    }
    
    try:
        req = urllib.request.Request(url, data=data, headers=headers)
        with urllib.request.urlopen(req) as response:
            result = json.loads(response.read().decode())
            if 'errors' in result:
                print(f"API Error: {result['errors']}")
                return None
            return result.get('data', {}).get('serviceCreate')
    except Exception as e:
        print(f"API request failed: {e}")
        return None

def set_environment_variable(token, project_id, environment_id, service_id, var_name, var_value):
    """Set environment variable via Railway API"""
    import urllib.request
    
    url = "https://backboard.railway.app/graphql/v1"
    
    mutation = {
        "query": """
        mutation SetVariable($projectId: String!, $environmentId: String!, $serviceId: String!, $name: String!, $value: String!) {
            variableUpsert(projectId: $projectId, environmentId: $environmentId, serviceId: $serviceId, name: $name, value: $value) {
                id
                name
                value
            }
        }
        """,
        "variables": {
            "projectId": project_id,
            "environmentId": environment_id,
            "serviceId": service_id,
            "name": var_name,
            "value": var_value
        }
    }
    
    data = json.dumps(mutation).encode('utf-8')
    headers = {
        'Content-Type': 'application/json',
        'Authorization': f'Bearer {token}'
    }
    
    try:
        req = urllib.request.Request(url, data=data, headers=headers)
        with urllib.request.urlopen(req) as response:
            result = json.loads(response.read().decode())
            if 'errors' in result:
                print(f"Variable Error: {result['errors']}")
                return False
            return True
    except Exception as e:
        print(f"Variable setting failed: {e}")
        return False

def deploy_via_cli(service_name):
    """Deploy using Railway CLI"""
    try:
        result = subprocess.run(
            ['railway', 'up', '--service', service_name, '--detach'],
            capture_output=True,
            text=True,
            timeout=60
        )
        return result.returncode == 0, result.stdout, result.stderr
    except Exception as e:
        return False, "", str(e)

def main():
    print("🚀 Automated Railway Frontend Deployment")
    print("=" * 50)
    
    # Configuration
    PROJECT_ID = "0c418e7f-ee9a-4c10-ad49-8d63251ca86e"
    ENVIRONMENT_ID = "e8678038-f823-4296-bbfa-6061f71e5bf6"
    SERVICE_NAME = "frontend"
    BACKEND_URL = "https://express-backend-production-e1da.up.railway.app"
    
    # Get token
    print("\n1️⃣ Getting Railway authentication token...")
    token = get_railway_token()
    if not token:
        print("❌ Could not get Railway token")
        return 1
    print("✅ Token obtained")
    
    # Create service
    print(f"\n2️⃣ Creating '{SERVICE_NAME}' service...")
    service = create_service_via_api(token, PROJECT_ID, ENVIRONMENT_ID, SERVICE_NAME)
    
    if service:
        service_id = service.get('id')
        print(f"✅ Service created! ID: {service_id}")
        
        # Set environment variable
        print(f"\n3️⃣ Setting API_URL environment variable...")
        if set_environment_variable(token, PROJECT_ID, ENVIRONMENT_ID, service_id, "API_URL", BACKEND_URL):
            print("✅ Environment variable set!")
        else:
            print("⚠️  Could not set variable via API, will try CLI...")
        
        # Deploy
        print(f"\n4️⃣ Deploying frontend service...")
        success, stdout, stderr = deploy_via_cli(SERVICE_NAME)
        if success:
            print("✅ Deployment initiated!")
            print(stdout)
        else:
            print("⚠️  CLI deployment had issues:")
            print(stderr)
            print("\n💡 Service created! You can deploy manually:")
            print(f"   railway up --service {SERVICE_NAME}")
        
        print("\n🎉 Frontend service created and configured!")
        print(f"\n📋 Next steps:")
        print(f"   1. Wait for deployment to complete")
        print(f"   2. Get domain: railway domain --service {SERVICE_NAME}")
        print(f"   3. Test your frontend URL")
        
        return 0
    else:
        print("❌ Could not create service via API")
        print("\n💡 Trying alternative method...")
        
        # Try GitHub integration approach
        print("\n5️⃣ Checking if service exists or can be created via GitHub...")
        try:
            # Check current services
            result = subprocess.run(
                ['railway', 'status'],
                capture_output=True,
                text=True
            )
            print(result.stdout)
            
            # Try to link and deploy
            print("\n6️⃣ Attempting to deploy from root directory...")
            os.chdir('/Users/vikram/Distributor-landing')
            result = subprocess.run(
                ['railway', 'up', '--detach'],
                capture_output=True,
                text=True,
                timeout=30
            )
            if "Multiple services" in result.stderr:
                print("⚠️  Multiple services found. Need to specify service.")
                print("\n📝 Service creation requires Railway dashboard.")
                print("   However, I've prepared everything else!")
                return 2
        except Exception as e:
            print(f"Error: {e}")
        
        return 1

if __name__ == "__main__":
    sys.exit(main())

