#!/bin/bash

# Railway Deployment Script
# This script helps deploy both backend and frontend services

echo "🚀 Railway Deployment Script"
echo "=============================="
echo ""

# Check for Railway CLI
if ! command -v railway &> /dev/null; then
    echo "❌ Error: Railway CLI is not installed."
    echo "Please visit https://docs.railway.app/guides/cli for installation instructions."
    exit 1
fi

# Backend URL (update this after backend deployment)
BACKEND_URL="https://express-backend-production-e1da.up.railway.app"

echo "📦 Step 1: Deploying Backend Service..."
if [ -d "server" ]; then
    cd server
    railway up --service express-backend || { echo "❌ Backend deployment failed"; exit 1; }
    echo "✅ Backend deployed!"
    cd ..
else
    echo "❌ Error: 'server' directory not found."
    exit 1
fi

echo ""

echo "📦 Step 2: Deploying Frontend Service (Root)..."
railway up || { echo "❌ Frontend deployment failed"; exit 1; }
echo "✅ Frontend deployed!"
echo ""

echo "🔧 Step 3: Setting Environment Variables..."
echo "Setting API_URL for frontend service..."
railway variables set API_URL=$BACKEND_URL || echo "⚠️ Warning: Failed to set API_URL via CLI. Please set it manually in Railway dashboard."
echo "✅ Environment variable set!"
echo ""

echo "🎉 Deployment Complete!"
echo ""
echo "Backend URL: $BACKEND_URL"
echo "Frontend URL: Check Railway dashboard for your frontend service URL"
echo ""
echo "Next steps:"
echo "1. Wait for both services to finish building"
echo "2. Get your frontend URL from Railway dashboard"
echo "3. Test the deployment by visiting the frontend URL"
echo "4. Verify API connection by checking browser console"

