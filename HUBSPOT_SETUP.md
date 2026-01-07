# HubSpot Integration Setup

## Information Needed

To integrate form submissions with HubSpot, I need the following information:

### Option 1: HubSpot API Key (Recommended)
- **HubSpot API Key** (Private App Access Token)
  - Go to: Settings → Integrations → Private Apps
  - Create a new private app or use existing one
  - Copy the Access Token

### Option 2: HubSpot Form Submission
- **HubSpot Portal ID** (Your HubSpot account ID)
- **HubSpot Form ID** (The form GUID you want to submit to)
  - Go to: Marketing → Lead Capture → Forms
  - Select your form and copy the Form ID from the URL

### Option 3: HubSpot Contacts API
- **HubSpot API Key** (Private App Access Token)
- **HubSpot Portal ID** (Optional, but helpful)

## What Data Will Be Sent

The form collects:
- **Full Name** → `firstname` / `lastname`
- **Email** → `email`
- **Phone** → `phone`
- **City** → `city`
- **Business Type** → Custom property
- **Investment Range** → Custom property
- **Agreed to Terms** → Custom property
- **Agreed to Marketing** → Custom property

## Setup Steps

1. **Provide HubSpot credentials** (see above)
2. **I'll create:**
   - Backend API endpoint for HubSpot submission
   - Frontend integration to send data on form completion
   - Environment variable configuration
3. **You'll need to:**
   - Add environment variables to Railway backend service
   - (Optional) Create custom properties in HubSpot for business type and investment range

## Questions?

Please provide:
1. Which option do you prefer? (API Key, Form Submission, or Contacts API)
2. Your HubSpot credentials (API Key and/or Form ID)
3. Any custom property names you want to use in HubSpot

