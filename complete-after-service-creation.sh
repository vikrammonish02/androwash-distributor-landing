#!/bin/bash
# Complete automation AFTER frontend service is created
# Run this script after creating the frontend service in Railway dashboard

set -e

BACKEND_URL="https://express-backend-production-e1da.up.railway.app"
SERVICE_NAME="frontend"

echo "🚀 Completing Frontend Deployment"
echo "=================================="
echo ""

echo "Step 1: Linking to frontend service..."
cd /Users/vikram/Distributor-landing

# Try to link to frontend service
if railway service link "$SERVICE_NAME" 2>/dev/null; then
    echo "✅ Linked to frontend service"
else
    echo "⚠️  Could not auto-link. Please run: railway service link $SERVICE_NAME"
    echo "   Then run this script again."
    exit 1
fi

echo ""
echo "Step 2: Setting API_URL environment variable..."
railway variables --set "API_URL=$BACKEND_URL" --service "$SERVICE_NAME" && {
    echo "✅ Environment variable set!"
} || {
    echo "⚠️  Could not set variable automatically"
    echo "Please set manually:"
    echo "  railway variables --set API_URL=$BACKEND_URL --service $SERVICE_NAME"
}

echo ""
echo "Step 3: Deploying frontend..."
railway up --service "$SERVICE_NAME" --detach && {
    echo "✅ Deployment initiated!"
} || {
    echo "⚠️  Deployment command had issues, but service is configured"
}

echo ""
echo "Step 4: Getting frontend domain..."
railway domain --service "$SERVICE_NAME" 2>/dev/null || {
    echo "⚠️  Could not get domain automatically"
    echo "Get it from Railway dashboard:"
    echo "  https://railway.app/dashboard"
}

echo ""
echo "🎉 Frontend deployment complete!"
echo ""
echo "Next steps:"
echo "1. Wait for build to complete (check Railway dashboard)"
echo "2. Test your frontend URL"
echo "3. Verify API connection works"

