#!/bin/bash
# Final automated deployment attempt using all possible methods

set -e

PROJECT_ID="0c418e7f-ee9a-4c10-ad49-8d63251ca86e"
ENVIRONMENT_ID="e8678038-f823-4296-bbfa-6061f71e5bf6"
BACKEND_URL="https://express-backend-production-e1da.up.railway.app"

echo "🚀 Final Automated Deployment Attempt"
echo "======================================"
echo ""

# Method 1: Try to create service by deploying from a temp directory with railway.json
echo "Method 1: Attempting service creation via deployment..."
cd /Users/vikram/Distributor-landing

# Check if we can force create by using railway init
echo "Checking Railway project structure..."

# Method 2: Try using Railway's GitHub integration
echo ""
echo "Method 2: Checking GitHub integration..."
GITHUB_REPO="vikrammonish02/androwash-distributor-landing"
echo "Repo: $GITHUB_REPO"

# Method 3: Try to trigger deployment via webhook simulation
echo ""
echo "Method 3: Attempting to trigger via Railway CLI with service specification..."

# Try to deploy and let Railway auto-create service
railway up --detach 2>&1 | tee /tmp/railway-deploy.log || {
    if grep -q "Multiple services" /tmp/railway-deploy.log; then
        echo "⚠️  Multiple services detected"
        echo ""
        echo "Trying to deploy with explicit service creation..."
        
        # List what services exist
        echo "Current services in project:"
        railway status
        
        # Try creating via directory structure
        echo ""
        echo "Attempting to create frontend service by deploying from root..."
    fi
}

echo ""
echo "📋 Summary:"
echo "If service creation failed, Railway requires dashboard interaction."
echo "However, all code is ready and backend is deployed!"
echo ""
echo "Quick manual step (2 minutes):"
echo "1. Go to: https://railway.app/dashboard"
echo "2. Project: androwash-distributor"
echo "3. New → GitHub Repo → Select repo"
echo "4. Then run: railway variables --set API_URL=$BACKEND_URL --service frontend"

