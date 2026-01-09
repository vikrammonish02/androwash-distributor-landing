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

def list_projects(token):
    url = "https://backboard.railway.app/graphql/v1"
    query = {
        "query": """
        query GetProjects {
            projects {
                edges {
                    node {
                        id
                        name
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
            }
        }
        """
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
            return result.get('data', {}).get('projects', {}).get('edges', [])
    except Exception as e:
        print(f"API request failed: {e}")
        return None

token = get_railway_token()
if token:
    projects = list_projects(token)
    if projects:
        print("Projects found:")
        for edge in projects:
            node = edge.get('node', {})
            print(f"- {node.get('name')} (ID: {node.get('id')})")
            services = node.get('services', {}).get('edges', [])
            for s_edge in services:
                s_node = s_edge.get('node', {})
                print(f"  * Service: {s_node.get('name')} (ID: {s_node.get('id')})")
    else:
        print("No projects found or error occurred.")
else:
    print("Token not found.")
