import json
import os
import urllib.request

def get_railway_token():
    config_path = os.path.expanduser("~/.railway/config.json")
    try:
        with open(config_path, 'r') as f:
            config = json.load(f)
            token = (config.get('token') or 
                    config.get('user', {}).get('token') or
                    config.get('auth', {}).get('token', ''))
            return token
    except Exception as e:
        print(f"Error reading Railway config: {e}")
        return None

def list_services(token, project_id):
    url = "https://backboard.railway.app/graphql/v1"
    query = {
        "query": """
        query GetProject($id: String!) {
            project(id: $id) {
                services {
                    edges {
                        node {
                            id
                            name
                        }
                    }
                }
            }
        }
        """,
        "variables": {
            "id": project_id
        }
    }
    
    data = json.dumps(query).encode('utf-8')
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
            return result.get('data', {}).get('project', {}).get('services', {}).get('edges', [])
    except Exception as e:
        print(f"API request failed: {e}")
        return None

token = get_railway_token()
PROJECT_ID = "0c418e7f-ee9a-4c10-ad49-8d63251ca86e"
if token:
    services = list_services(token, PROJECT_ID)
    if services:
        print("Services found:")
        for edge in services:
            node = edge.get('node', {})
            print(f"- {node.get('name')} (ID: {node.get('id')})")
    else:
        print("No services found or error occurred.")
else:
    print("Token not found.")
