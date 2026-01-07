# Getting HubSpot API Key from Connected App

## Steps to Get Your API Key

Since you have a connected app at: https://app.hubspot.com/connected-apps/7869119/overview

### Option 1: Get Token from Connected App

1. **Go to your connected app:**
   - Visit: https://app.hubspot.com/connected-apps/7869119/overview

2. **Find the Access Token:**
   - Look for a section called **"Access Token"** or **"Tokens"**
   - Click **"Show token"** or **"View token"**
   - Copy the token (it starts with `pat-`)

3. **If you don't see the token:**
   - You may need to create a new token
   - Look for **"Create token"** or **"Generate token"** button

### Option 2: Create Private App (Recommended)

If the connected app doesn't show tokens, create a Private App:

1. **Go to Settings:**
   - https://app.hubspot.com/settings/integrations/private-apps

2. **Create New Private App:**
   - Click **"Create a private app"**
   - Name: "AndroWash Distribution Landing"

3. **Set Scopes:**
   - Go to **"Scopes"** tab
   - Enable: **`crm.objects.contacts.write`**
   - Enable: **`crm.objects.contacts.read`** (optional)

4. **Create and Get Token:**
   - Click **"Create app"**
   - Copy the **Access Token** (starts with `pat-`)

## Once You Have the Token

Share it with me and I'll:
1. Add it to Railway backend environment variables
2. Test the integration
3. Complete the setup

