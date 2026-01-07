# Railway Deployment Guide

This guide will help you deploy the Distributor Landing site to Railway.

## Project Structure

The project consists of two services:
1. **Frontend** - React/Vite application served via Nginx
2. **Backend** - Express API server

## Deployment Steps

### 1. Create Railway Account
- Go to [railway.app](https://railway.app)
- Sign up or log in with GitHub

### 2. Create New Project
- Click "New Project"
- Select "Deploy from GitHub repo" (recommended) or "Empty Project"

### 3. Deploy Backend Service

1. **Add Backend Service:**
   - Click "New" → "GitHub Repo" (or "Empty Service")
   - Select your repository
   - Railway will detect the `server/railway.json` configuration

2. **Configure Backend:**
   - Railway will use Nixpacks builder (as configured in `server/railway.json`)
   - The service will start with: `node index.js`
   - Health check: `/api/config`

3. **Get Backend URL:**
   - Once deployed, Railway will provide a public URL
   - Copy this URL (e.g., `https://your-backend.railway.app`)
   - You'll need this for the frontend configuration

### 4. Deploy Frontend Service

1. **Add Frontend Service:**
   - In the same project, click "New" → "GitHub Repo"
   - Select the same repository
   - Railway will detect the root `railway.json` configuration

2. **Set Environment Variables:**
   - Go to the frontend service → "Variables" tab
   - Add the following environment variable:
     ```
     API_URL=https://your-backend.railway.app
     ```
     (Replace with your actual backend URL)

3. **Build Configuration:**
   - Railway will use Dockerfile (as configured in `railway.json`)
   - The Dockerfile builds the Vite app and serves it with Nginx
   - Nginx will proxy `/api` requests to the backend service

### 5. Configure Domain (Optional)

1. **Custom Domain:**
   - Go to your frontend service → "Settings" → "Domains"
   - Click "Generate Domain" or add your custom domain
   - Update DNS records if using custom domain

2. **Backend Domain (if needed):**
   - If you want a custom domain for the backend, configure it similarly

## Environment Variables

### Frontend Service
- `API_URL` - Backend service URL (e.g., `https://your-backend.railway.app`)
- `PORT` - Automatically set by Railway (default: 80)

### Backend Service
- `PORT` - Automatically set by Railway

## Verification

1. **Check Backend:**
   - Visit `https://your-backend.railway.app/api/config`
   - Should return JSON configuration

2. **Check Frontend:**
   - Visit your frontend URL
   - Should load the landing page
   - API calls should work (check browser console for errors)

## Troubleshooting

### Frontend can't connect to backend
- Verify `API_URL` environment variable is set correctly
- Check that backend service is running
- Ensure backend URL is publicly accessible

### 404 errors on page refresh
- This is handled by Nginx configuration (`try_files` directive)
- Verify `nginx.conf.template` is correct

### Build failures
- Check Railway build logs
- Ensure all dependencies are in `package.json`
- Verify Dockerfile syntax

## Local Development

For local development, the services run separately:
- Frontend: `npm run dev` (port 5173)
- Backend: `npm run server` (port 5001)
- Or both: `npm run dev:all`

The frontend will proxy `/api` requests to `http://localhost:5001` in development mode.

## Production Build

The frontend build process:
1. Installs dependencies
2. Builds with Vite (`npm run build`)
3. Serves static files with Nginx
4. Proxies API requests to backend service

## Notes

- The backend uses a simple file-based config (`server/data/config.json`)
- Admin password is hardcoded as `admin123` (consider using environment variable)
- Both services can be scaled independently on Railway
- Railway provides automatic HTTPS certificates

