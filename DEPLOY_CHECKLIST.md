# Railway Deployment Checklist

## Pre-Deployment Checklist

- [x] Updated `useConfig.js` to use environment variables
- [x] Updated `vite.config.js` for production builds
- [x] Updated `nginx.conf.template` to proxy API requests
- [x] Updated `Dockerfile` with proper environment variable handling
- [x] Created startup script for nginx configuration

## Quick Deploy Steps

### Step 1: Deploy Backend
1. Go to Railway → New Project → New Service
2. Connect GitHub repo (or upload code)
3. Set root directory to `server/` (or Railway will auto-detect)
4. Railway will use `server/railway.json` configuration
5. Wait for deployment to complete
6. Copy the backend URL (e.g., `https://your-backend.railway.app`)

### Step 2: Deploy Frontend
1. In the same Railway project → New Service
2. Connect the same GitHub repo
3. Railway will use root `railway.json` (Dockerfile builder)
4. Go to Variables tab → Add:
   ```
   API_URL=https://your-backend.railway.app
   ```
   (Use the actual backend URL from Step 1)
5. Wait for deployment to complete
6. Get your frontend URL

### Step 3: Test
1. Visit frontend URL - should load the site
2. Check browser console for API errors
3. Visit `/api/config` endpoint (should proxy to backend)
4. Test admin panel at `/admin`

## Important Notes

- **Backend URL**: Make sure to use the full URL including `https://`
- **CORS**: Backend already has CORS enabled for all origins
- **Environment Variables**: Only `API_URL` needs to be set for frontend
- **Port**: Railway automatically sets `PORT` environment variable

## Troubleshooting

If frontend can't connect to backend:
1. Verify `API_URL` is set correctly in Railway variables
2. Check backend service is running (Railway dashboard)
3. Test backend URL directly: `https://your-backend.railway.app/api/config`
4. Check Railway logs for both services

## Files Modified for Deployment

- `src/hooks/useConfig.js` - Now uses environment variables
- `vite.config.js` - Updated for production API URL
- `nginx.conf.template` - Added API proxy configuration
- `Dockerfile` - Added environment variable handling
- `start-nginx.sh` - Startup script for nginx config generation

