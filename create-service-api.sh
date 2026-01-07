#!/bin/bash

# Create frontend service via Railway API

TOKEN=$(cat ~/.railway/config.json | grep -o '"token":"[^"]*' | cut -d'"' -f4)
PROJECT_ID="0c418e7f-ee9a-4c10-ad49-8d63251ca86e"
ENVIRONMENT_ID="e8678038-f823-4296-bbfa-6061f71e5bf6"

echo "Creating frontend service via Railway API..."

MUTATION='{
  "query": "mutation CreateService($projectId: String!, $environmentId: String!, $name: String!) { serviceCreate(projectId: $projectId, environmentId: $environmentId, name: $name) { id name } }",
  "variables": {
    "projectId": "'$PROJECT_ID'",
    "environmentId": "'$ENVIRONMENT_ID'",
    "name": "frontend"
  }
}'

RESPONSE=$(curl -s -X POST https://backboard.railway.app/graphql/v1 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d "$MUTATION")

echo "$RESPONSE" | python3 -m json.tool

# Check if service was created
if echo "$RESPONSE" | grep -q "serviceCreate"; then
    SERVICE_ID=$(echo "$RESPONSE" | python3 -c "import sys, json; print(json.load(sys.stdin).get('data', {}).get('serviceCreate', {}).get('id', ''))" 2>/dev/null)
    if [ -n "$SERVICE_ID" ]; then
        echo "✅ Service created! ID: $SERVICE_ID"
        echo ""
        echo "Now setting environment variable..."
        
        # Set API_URL variable
        BACKEND_URL="https://express-backend-production-e1da.up.railway.app"
        
        VARIABLE_MUTATION='{
          "query": "mutation SetVariable($projectId: String!, $environmentId: String!, $serviceId: String!, $name: String!, $value: String!) { variableUpsert(projectId: $projectId, environmentId: $environmentId, serviceId: $serviceId, name: $name, value: $value) { id name value } }",
          "variables": {
            "projectId": "'$PROJECT_ID'",
            "environmentId": "'$ENVIRONMENT_ID'",
            "serviceId": "'$SERVICE_ID'",
            "name": "API_URL",
            "value": "'$BACKEND_URL'"
          }
        }'
        
        VAR_RESPONSE=$(curl -s -X POST https://backboard.railway.app/graphql/v1 \
          -H "Content-Type: application/json" \
          -H "Authorization: Bearer $TOKEN" \
          -d "$VARIABLE_MUTATION")
        
        echo "$VAR_RESPONSE" | python3 -m json.tool
        
        if echo "$VAR_RESPONSE" | grep -q "variableUpsert"; then
            echo "✅ Environment variable set!"
            echo ""
            echo "🚀 Service created and configured!"
            echo "Now deploying..."
        fi
    fi
else
    echo "❌ Failed to create service"
    echo "Response: $RESPONSE"
fi

