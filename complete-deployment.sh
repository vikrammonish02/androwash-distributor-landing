#!/bin/bash

# Complete Railway Deployment Script
# This script completes the frontend deployment

set -e

echo "🚀 Completing Railway Deployment"
echo "=================================="
echo ""

BACKEND_URL="https://express-backend-production-e1da.up.railway.app"
PROJECT_ID="0c418e7f-ee9a-4c10-ad49-8d63251ca86e"

echo "📋 Current Status:"
echo "  - Backend: ✅ Deployed at $BACKEND_URL"
echo "  - Frontend: ⏳ Needs deployment"
echo ""

echo "🔧 Step 1: Checking Railway project..."
railway status

echo ""
echo "📦 Step 2: Deploying Frontend..."
echo "Note: If frontend service doesn't exist, you'll need to create it via Railway dashboard"
echo ""

# Try to deploy - Railway will create service if configured via GitHub
cd /Users/vikram/Distributor-landing

# Check if we can deploy to a specific service
if railway service link frontend 2>/dev/null; then
    echo "✅ Frontend service found, deploying..."
    railway up --service frontend --detach
else
    echo "⚠️  Frontend service not found"
    echo ""
    echo "To complete deployment:"
    echo "1. Go to: https://railway.app/dashboard"
    echo "2. Open project: androwash-distributor"
    echo "3. Click 'New' → 'GitHub Repo'"
    echo "4. Select: vikrammonish02/androwash-distributor-landing"
    echo "5. Railway will auto-detect Dockerfile and deploy"
    echo "6. Then run: railway variables --set API_URL=$BACKEND_URL --service frontend"
    exit 1
fi

echo ""
echo "🔧 Step 3: Setting Environment Variables..."
railway variables --set "API_URL=$BACKEND_URL" --service frontend || {
    echo "⚠️  Could not set variable automatically"
    echo "Please set manually:"
    echo "  railway variables --set API_URL=$BACKEND_URL --service frontend"
}

echo ""
echo "✅ Deployment initiated!"
echo ""
echo "Next steps:"
echo "1. Wait for build to complete (check Railway dashboard)"
echo "2. Get frontend URL: railway domain --service frontend"
echo "3. Test the deployment"

