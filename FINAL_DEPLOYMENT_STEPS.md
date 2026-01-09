# Final Deployment & HubSpot Setup Guide

This guide provides the final steps to complete the deployment and ensure HubSpot integration is working correctly.

## ✅ Current Status
- **Backend**: Live at `https://express-backend-production-e1da.up.railway.app`
- **Frontend**: Service needs to be linked/deployed with `API_URL` variable.
- **HubSpot**: Backend is ready but requires `HUBSPOT_API_KEY` (Private App Token).

---

## 🚀 Step 1: Complete Deployment

### Via Railway Dashboard (Recommended)
1. Go to [Railway Dashboard](https://railway.app/dashboard).
2. Open project **androwash-distributor**.
3. Create a **New** service → **GitHub Repo** → `vikrammonish02/androwash-distributor-landing`.
4. Go to the new service → **Variables** tab.
5. Add `API_URL` = `https://express-backend-production-e1da.up.railway.app`.
6. Go to **Settings** → **Domains** → **Generate Domain**.

---

## 🔑 Step 2: HubSpot Integration (Private App Token)

To allow the form to submit contacts to HubSpot:

1. **Create Private App in HubSpot**:
   - Go to **Settings** → **Integrations** → **Private Apps**.
   - Click **Create private app**.
   - Give it a name (e.g., "AndroWash Landing Page").
   - Under **Scopes**, select:
     - `crm.objects.contacts.write`
     - `crm.objects.contacts.read` (optional, for verification)
   - Click **Create app** and copy the **Access Token**.

2. **Add Token to Railway**:
   - Go to your **backend service** (express-backend) in Railway.
   - Go to **Variables** tab.
   - Add `HUBSPOT_API_KEY` = `your_copied_access_token`.
   - The backend will automatically redeploy.

---

## 🔍 Step 3: Verify HubSpot Connection

We've provided a script to verify your HubSpot connection without having to fill out the form:

```bash
# From the root directory
HUBSPOT_API_KEY=your_token_here node server/verify_hubspot.js
```

This will:
- Test the API connection.
- Verify if the required custom properties exist in your HubSpot account.
- Note: If properties like `business_type` are missing, you should create them as custom properties in HubSpot (Settings → Properties → Create property).

---

## 🧪 Step 4: Final Test

1. Visit your frontend URL.
2. Complete the form (Steps 1, 2, and 3).
3. If successful, you will see a loading spinner, then a success message, and finally be redirected to the Topmate calendar.
4. Check your HubSpot **Contacts** to see the new lead!

---

## 🛠 Troubleshooting

- **Check Logs**: If submission fails, check the **backend** logs in Railway for "HubSpot API Error".
- **API_URL**: Ensure the frontend `API_URL` exactly matches the backend URL (with https://).
- **CORS**: The backend is configured to allow all origins, so CORS should not be an issue.

🚀 **Your landing page is now ready for high-conversion traffic!**

