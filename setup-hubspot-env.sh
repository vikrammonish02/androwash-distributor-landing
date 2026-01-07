#!/bin/bash
# Script to set HubSpot API key in Railway

echo "🔑 HubSpot API Key Setup for Railway"
echo "======================================"
echo ""

if [ -z "$1" ]; then
    echo "Usage: ./setup-hubspot-env.sh YOUR_HUBSPOT_API_KEY"
    echo ""
    echo "Example:"
    echo "  ./setup-hubspot-env.sh pat-na1-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
    echo ""
    echo "To get your API key:"
    echo "  1. Go to: https://app.hubspot.com/connected-apps/7869119/overview"
    echo "  2. Or create new: https://app.hubspot.com/settings/integrations/private-apps"
    echo "  3. Copy the Access Token"
    exit 1
fi

HUBSPOT_API_KEY=$1
SERVICE_NAME="express-backend"

echo "Setting HUBSPOT_API_KEY for backend service..."
railway variables --set "HUBSPOT_API_KEY=$HUBSPOT_API_KEY" --service "$SERVICE_NAME" && {
    echo ""
    echo "✅ HubSpot API Key set successfully!"
    echo ""
    echo "The backend service will automatically redeploy with the new key."
    echo "Form submissions will now be sent to HubSpot!"
} || {
    echo ""
    echo "⚠️  Could not set variable automatically"
    echo ""
    echo "Please set manually in Railway dashboard:"
    echo "  1. Go to: https://railway.app/dashboard"
    echo "  2. Open 'express-backend' service"
    echo "  3. Go to 'Variables' tab"
    echo "  4. Add: HUBSPOT_API_KEY = $HUBSPOT_API_KEY"
}

