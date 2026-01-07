# Quick Railway Deployment Guide

## ✅ What's Already Done

1. ✅ All code changes committed and pushed to GitHub
2. ✅ Backend service deployed: `express-backend`
3. ✅ Backend URL: `https://express-backend-production-e1da.up.railway.app`
4. ✅ Frontend code is ready for deployment

## 🚀 Complete Deployment Steps

### Option 1: Via Railway Dashboard (Recommended)

1. **Go to Railway Dashboard**
   - Visit: https://railway.app/dashboard
   - Open project: `androwash-distributor`

2. **Create Frontend Service** (if not exists)
   - Click "New" → "GitHub Repo"
   - Select: `vikrammonish02/androwash-distributor-landing`
   - Railway will detect the root `railway.json` (Dockerfile builder)
   - Wait for deployment

3. **Set Environment Variable**
   - Go to your **frontend service** → "Variables" tab
   - Click "New Variable"
   - Name: `API_URL`
   - Value: `https://express-backend-production-e1da.up.railway.app`
   - Click "Add"
   - Service will automatically redeploy

4. **Get Frontend URL**
   - Go to frontend service → "Settings" → "Domains"
   - Click "Generate Domain" or use existing domain
   - Copy the URL

5. **Test Deployment**
   - Visit your frontend URL
   - Check browser console for errors
   - Test the admin panel at `/admin`

### Option 2: Via Railway CLI

```bash
# 1. Deploy backend (already done, but you can redeploy)
cd server
railway up --service express-backend

# 2. Deploy frontend (from root directory)
cd ..
railway up

# 3. Set API_URL environment variable
railway variables set API_URL=https://express-backend-production-e1da.up.railway.app

# 4. Get frontend domain
railway domain
```

## 📋 Current Status

- **Backend**: ✅ Deployed at `https://express-backend-production-e1da.up.railway.app`
- **Frontend**: ⏳ Needs to be deployed (create new service in Railway dashboard)
- **Environment Variables**: ⏳ Need to set `API_URL` in frontend service

## 🔍 Verification Checklist

After deployment, verify:

- [ ] Backend responds at: `https://express-backend-production-e1da.up.railway.app/api/config`
- [ ] Frontend loads without errors
- [ ] Frontend can fetch config from backend (check browser console)
- [ ] Admin panel works at `/admin`
- [ ] All forms and buttons work correctly

## 🐛 Troubleshooting

### Frontend can't connect to backend
- Verify `API_URL` environment variable is set correctly
- Check that backend service is running
- Ensure backend URL includes `https://`

### 404 errors
- Verify nginx configuration is correct
- Check that `try_files` directive is in nginx config

### Build failures
- Check Railway build logs
- Verify all dependencies are in package.json
- Check Dockerfile syntax

## 📞 Need Help?

- Railway Docs: https://docs.railway.app
- Railway Dashboard: https://railway.app/dashboard
- Check build logs in Railway dashboard for detailed errors

