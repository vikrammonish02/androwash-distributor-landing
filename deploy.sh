#!/bin/bash

# Railway Deployment Script
# This script helps deploy both backend and frontend services

echo "🚀 Railway Deployment Script"
echo "=============================="
echo ""

# Backend URL (update this after backend deployment)
BACKEND_URL="https://express-backend-production-e1da.up.railway.app"

echo "📦 Step 1: Deploying Backend Service..."
cd server
railway up --service express-backend
echo "✅ Backend deployed!"
echo ""

echo "📦 Step 2: Deploying Frontend Service..."
cd ..
railway up
echo "✅ Frontend deployed!"
echo ""

echo "🔧 Step 3: Setting Environment Variables..."
echo "Setting API_URL for frontend service..."
railway variables set API_URL=$BACKEND_URL
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

