# 🚀 HubSpot Quick Setup Guide

## Your Connected App
You have a connected app at: https://app.hubspot.com/connected-apps/7869119/overview

## Step 1: Get Your API Key

### From Your Connected App:

1. **Visit your connected app:**
   ```
   https://app.hubspot.com/connected-apps/7869119/overview
   ```

2. **Find the Access Token:**
   - Look for **"Access Token"** or **"Tokens"** section
   - Click **"Show token"** or **"View token"**
   - Copy the token (it starts with `pat-`)

3. **If you don't see a token:**
   - Look for **"Create token"** or **"Generate token"** button
   - Create a new token and copy it

### Alternative: Create Private App

If the connected app doesn't work, create a Private App:

1. Go to: https://app.hubspot.com/settings/integrations/private-apps
2. Click **"Create a private app"**
3. Name: "AndroWash Distribution Landing"
4. **Scopes:** Enable `crm.objects.contacts.write`
5. Click **"Create app"**
6. Copy the **Access Token**

## Step 2: Set Up in Railway

### Option A: Using Script (Easiest)

Once you have your API key, run:

```bash
cd /Users/vikram/Distributor-landing
./setup-hubspot-env.sh YOUR_API_KEY_HERE
```

Replace `YOUR_API_KEY_HERE` with your actual HubSpot API key.

### Option B: Manual Setup

1. Go to Railway Dashboard: https://railway.app/dashboard
2. Open **"express-backend"** service
3. Go to **"Variables"** tab
4. Click **"New Variable"**
5. Name: `HUBSPOT_API_KEY`
6. Value: `[Your API Key]`
7. Click **"Add"**

The service will automatically redeploy!

## Step 3: Test

After setting the API key:

1. Fill out the form on your landing page
2. Complete all 3 steps
3. Check HubSpot → Contacts to see the new contact

## ✅ That's It!

Once the API key is set, form submissions will automatically go to HubSpot!

## Need Help?

If you can't find the token, share a screenshot or describe what you see on the connected app page, and I'll help you find it!

