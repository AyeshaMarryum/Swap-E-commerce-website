# Vercel Deployment Guide for FinalSwap

This project consists of three separate applications that need to be deployed independently on Vercel.

## Project Structure

```
finalSwap2/
├── frontend/     # Main user-facing application
├── admin/        # Admin dashboard
├── backend/      # API server
└── vercel.json   # Monorepo config (optional)
```

## Deployment Options

### Option 1: Three Separate Projects (Recommended)

Deploy each application as a separate Vercel project for better control and independent scaling.

#### 1. Deploy Backend API

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New Project"
3. Import your Git repository
4. Configure the project:
   - **Project Name**: `finalswap-api` (or your preferred name)
   - **Framework Preset**: Other
   - **Root Directory**: `backend`
   - **Build Command**: Leave empty (not needed for Node.js)
   - **Output Directory**: Leave empty
   - **Install Command**: `npm install`

5. **Environment Variables** (CRITICAL - Add these):
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   CLOUDINARY_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
   STRIPE_SECRET_KEY=your_stripe_secret_key (if using Stripe)
   RAZORPAY_KEY_ID=your_razorpay_key_id (if using Razorpay)
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret (if using Razorpay)
   ```

6. Click "Deploy"
7. Note your API URL (e.g., `https://finalswap-api.vercel.app`)

#### 2. Deploy Frontend

1. Click "Add New Project" again
2. Import the same Git repository
3. Configure the project:
   - **Project Name**: `finalswap-frontend`
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **Environment Variables**:
   ```
   VITE_API_URL=https://finalswap-api.vercel.app
   ```
   (Replace with your actual backend URL from step 1)

5. Click "Deploy"

#### 3. Deploy Admin Dashboard

1. Click "Add New Project" again
2. Import the same Git repository
3. Configure the project:
   - **Project Name**: `finalswap-admin`
   - **Framework Preset**: Vite
   - **Root Directory**: `admin`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **Environment Variables**:
   ```
   VITE_API_URL=https://finalswap-api.vercel.app
   ```
   (Replace with your actual backend URL from step 1)

5. Click "Deploy"

---

### Option 2: Single Monorepo Project

Deploy all three applications from a single Vercel project using the root `vercel.json`.

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New Project"
3. Import your Git repository
4. Configure the project:
   - **Project Name**: `finalswap`
   - **Framework Preset**: Other
   - **Root Directory**: `./` (root)
   - Leave build settings as default

5. Add all environment variables mentioned above
6. Click "Deploy"

**Note**: This option is more complex and may require additional configuration.

---

## Post-Deployment Steps

### 1. Update API URLs in Frontend Code

After deploying the backend, update the API URL in your frontend applications:

**Frontend** (`frontend/src/` files):
- Search for any hardcoded API URLs
- Replace with environment variable: `import.meta.env.VITE_API_URL`

**Admin** (`admin/src/` files):
- Search for any hardcoded API URLs
- Replace with environment variable: `import.meta.env.VITE_API_URL`

### 2. Configure CORS in Backend

Update `backend/server.js` to allow your frontend domains:

```javascript
app.use(cors({
  origin: [
    'https://finalswap-frontend.vercel.app',
    'https://finalswap-admin.vercel.app',
    'http://localhost:5173', // for local development
    'http://localhost:5174'
  ],
  credentials: true
}))
```

### 3. Set Up Custom Domains (Optional)

In Vercel Dashboard for each project:
1. Go to Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

Suggested domain structure:
- Frontend: `www.yourapp.com` or `yourapp.com`
- Admin: `admin.yourapp.com`
- API: `api.yourapp.com`

---

## Environment Variables Checklist

### Backend (.env)
```env
# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname

# Authentication
JWT_SECRET=your_super_secret_jwt_key_here

# Cloudinary (for image uploads)
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key

# Payment Gateways (if applicable)
STRIPE_SECRET_KEY=sk_live_...
RAZORPAY_KEY_ID=rzp_live_...
RAZORPAY_KEY_SECRET=...

# Server
PORT=5000
NODE_ENV=production
```

### Frontend & Admin (.env)
```env
VITE_API_URL=https://your-api-url.vercel.app
```

---

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Verify Node.js version compatibility
- Check build logs in Vercel dashboard

### API Not Working
- Verify environment variables are set correctly
- Check CORS configuration
- Review function logs in Vercel dashboard

### Frontend Can't Connect to API
- Verify `VITE_API_URL` is set correctly
- Check browser console for CORS errors
- Ensure API is deployed and running

### Database Connection Issues
- Verify MongoDB URI is correct
- Check MongoDB Atlas network access (allow Vercel IPs: `0.0.0.0/0`)
- Ensure database user has proper permissions

---

## Continuous Deployment

Once connected to Git:
- Push to `main` branch → Auto-deploys to production
- Push to other branches → Creates preview deployments
- Pull requests → Automatic preview URLs

---

## Useful Commands

```bash
# Install Vercel CLI (optional)
npm i -g vercel

# Deploy from command line
cd frontend && vercel
cd admin && vercel
cd backend && vercel

# Deploy to production
vercel --prod
```

---

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Node.js on Vercel](https://vercel.com/docs/functions/serverless-functions/runtimes/node-js)

---

## Support

If you encounter issues:
1. Check Vercel deployment logs
2. Review browser console errors
3. Verify all environment variables
4. Check MongoDB Atlas network access settings