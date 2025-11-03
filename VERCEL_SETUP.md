# Quick Vercel Deployment Setup

## 🚀 Fast Track Deployment (3 Steps)

### Step 1: Deploy Backend API First

1. Go to https://vercel.com/new
2. Import your repository
3. Configure:
   - **Root Directory**: `backend`
   - **Framework**: Other
4. Add Environment Variables (click "Environment Variables"):
   ```
   MONGODB_URI = your_mongodb_connection_string
   JWT_SECRET = your_secret_key_here
   CLOUDINARY_NAME = your_cloudinary_name
   CLOUDINARY_API_KEY = your_api_key
   CLOUDINARY_SECRET_KEY = your_secret_key
   ```
5. Click **Deploy**
6. **IMPORTANT**: Copy your API URL (e.g., `https://finalswap-api.vercel.app`)

### Step 2: Deploy Frontend

1. Click "Add New Project" in Vercel
2. Import same repository
3. Configure:
   - **Root Directory**: `frontend`
   - **Framework**: Vite
4. Add Environment Variable:
   ```
   VITE_API_URL = https://finalswap-api.vercel.app
   ```
   (Use the URL from Step 1)
5. Click **Deploy**

### Step 3: Deploy Admin Dashboard

1. Click "Add New Project" in Vercel
2. Import same repository
3. Configure:
   - **Root Directory**: `admin`
   - **Framework**: Vite
4. Add Environment Variable:
   ```
   VITE_API_URL = https://finalswap-api.vercel.app
   ```
   (Use the URL from Step 1)
5. Click **Deploy**

## ✅ Done!

You now have three deployed apps:
- 🌐 Frontend: `https://finalswap-frontend.vercel.app`
- 👨‍💼 Admin: `https://finalswap-admin.vercel.app`
- 🔌 API: `https://finalswap-api.vercel.app`

---

## 📝 Important Notes

### MongoDB Atlas Setup
Make sure your MongoDB allows connections from Vercel:
1. Go to MongoDB Atlas → Network Access
2. Click "Add IP Address"
3. Select "Allow Access from Anywhere" (0.0.0.0/0)
4. Click "Confirm"

### Environment Variables Checklist

**Backend** (Required):
- ✅ MONGODB_URI
- ✅ JWT_SECRET
- ✅ CLOUDINARY_NAME
- ✅ CLOUDINARY_API_KEY
- ✅ CLOUDINARY_SECRET_KEY

**Frontend & Admin** (Required):
- ✅ VITE_API_URL

### After Deployment

1. **Test your API**: Visit `https://your-api.vercel.app` - should show "API WORKING"
2. **Test frontend**: Visit your frontend URL
3. **Check browser console** for any API connection errors

---

## 🔧 Troubleshooting

**"API not working"**
- Check environment variables are set in Vercel dashboard
- Verify MongoDB connection string is correct
- Check MongoDB network access allows Vercel IPs

**"CORS error"**
- Backend CORS is already configured for Vercel domains
- If using custom domain, update CORS in `backend/server.js`

**"Build failed"**
- Check build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Try building locally first: `npm run build`

---

## 📚 Full Documentation

For detailed instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

## 🆘 Need Help?

1. Check Vercel deployment logs
2. Review browser console errors
3. Verify environment variables
4. Check [Vercel Documentation](https://vercel.com/docs)