# HubSpot Integration - Credentials Needed

## ✅ What I've Done

I've created the complete HubSpot integration:

1. ✅ **Backend API Endpoint** (`/api/submit-to-hubspot`)
   - Receives form data
   - Submits to HubSpot Contacts API
   - Handles errors gracefully

2. ✅ **Frontend Integration**
   - Automatically submits form when Step 3 (Calendar) loads
   - Shows loading state
   - Shows success/error messages

3. ✅ **Data Mapping**
   - Full Name → `firstname` / `lastname`
   - Email → `email`
   - Phone → `phone`
   - City → `city`
   - Business Type → `business_type` (custom property)
   - Investment Range → `investment_range` (custom property)
   - Terms Agreement → `agreed_to_terms` (custom property)
   - Marketing Consent → `marketing_consent` (custom property)

## 🔑 What I Need From You

### HubSpot API Key (Private App Access Token)

**Steps to get it:**

1. **Log into HubSpot**
   - Go to: https://app.hubspot.com

2. **Navigate to Private Apps**
   - Click: **Settings** (gear icon) → **Integrations** → **Private Apps**

3. **Create or Use Existing Private App**
   - Click **"Create a private app"** or select existing one
   - Name it: "AndroWash Distribution Landing"

4. **Set Permissions**
   - Go to **"Scopes"** tab
   - Enable: **`crm.objects.contacts.write`** (Write contacts)
   - Enable: **`crm.objects.contacts.read`** (Read contacts) - optional but recommended

5. **Get Access Token**
   - Click **"Create app"** or **"Show token"**
   - Copy the **Access Token** (starts with `pat-` or `pat-na1-`)

### Optional: Custom Properties Setup

If you want to use custom properties in HubSpot, create these properties:

1. **business_type** (Single-line text)
2. **investment_range** (Single-line text)
3. **agreed_to_terms** (Single-line text)
4. **marketing_consent** (Single-line text)

**To create properties:**
- Go to: **Settings** → **Properties** → **Contact properties**
- Click **"Create property"**
- Add each property with the names above

## 📋 Next Steps

Once you provide the HubSpot API Key:

1. **I'll add it to Railway backend environment variables**
2. **Test the integration**
3. **Deploy everything**

## 🚀 Quick Setup

**Please provide:**
```
HubSpot API Key: [Your API Key Here]
```

That's it! I'll handle the rest.

## 📝 Example API Key Format

HubSpot API keys look like:
- `pat-na1-xxxx-xxxx-xxxx-xxxxxxxxxxxx` (for US accounts)
- `pat-eu1-xxxx-xxxx-xxxx-xxxxxxxxxxxx` (for EU accounts)
- Or just `pat-xxxx-xxxx-xxxx-xxxxxxxxxxxx`

