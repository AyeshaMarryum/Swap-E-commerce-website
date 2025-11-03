# Vercel Deployment Checklist ✅

## Pre-Deployment

- [ ] MongoDB Atlas database is set up
- [ ] MongoDB network access allows all IPs (0.0.0.0/0)
- [ ] Cloudinary account is configured
- [ ] All API keys and secrets are ready
- [ ] Code is pushed to GitHub/GitLab/Bitbucket

## Backend Deployment

- [ ] Create new Vercel project
- [ ] Set root directory to `backend`
- [ ] Add environment variable: `MONGODB_URI`
- [ ] Add environment variable: `JWT_SECRET`
- [ ] Add environment variable: `CLOUDINARY_NAME`
- [ ] Add environment variable: `CLOUDINARY_API_KEY`
- [ ] Add environment variable: `CLOUDINARY_SECRET_KEY`
- [ ] Add payment gateway keys (if applicable)
- [ ] Deploy and copy the API URL
- [ ] Test API endpoint (should show "API WORKING")

## Frontend Deployment

- [ ] Create new Vercel project
- [ ] Set root directory to `frontend`
- [ ] Set framework to Vite
- [ ] Add environment variable: `VITE_API_URL` (backend URL)
- [ ] Deploy
- [ ] Test the application
- [ ] Check browser console for errors

## Admin Deployment

- [ ] Create new Vercel project
- [ ] Set root directory to `admin`
- [ ] Set framework to Vite
- [ ] Add environment variable: `VITE_API_URL` (backend URL)
- [ ] Deploy
- [ ] Test admin dashboard
- [ ] Check browser console for errors

## Post-Deployment Testing

- [ ] Frontend loads correctly
- [ ] Admin dashboard loads correctly
- [ ] API endpoints respond correctly
- [ ] User authentication works
- [ ] Image uploads work (Cloudinary)
- [ ] Database operations work
- [ ] Payment processing works (if applicable)
- [ ] No CORS errors in browser console

## Optional Enhancements

- [ ] Set up custom domains
- [ ] Configure domain SSL certificates
- [ ] Set up monitoring/analytics
- [ ] Configure error tracking (Sentry, etc.)
- [ ] Set up automated backups
- [ ] Configure CI/CD pipeline

## Environment Variables Reference

### Backend
```
MONGODB_URI=mongodb+srv://...
JWT_SECRET=your_secret
CLOUDINARY_NAME=your_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_SECRET_KEY=your_secret
STRIPE_SECRET_KEY=sk_... (optional)
RAZORPAY_KEY_ID=rzp_... (optional)
RAZORPAY_KEY_SECRET=... (optional)
```

### Frontend & Admin
```
VITE_API_URL=https://your-backend.vercel.app
```

## Deployment URLs

After deployment, note your URLs:

- **Backend API**: ___________________________
- **Frontend**: ___________________________
- **Admin**: ___________________________

## Support Resources

- 📖 [DEPLOYMENT.md](./DEPLOYMENT.md) - Full deployment guide
- 🚀 [VERCEL_SETUP.md](./VERCEL_SETUP.md) - Quick setup guide
- 🌐 [Vercel Docs](https://vercel.com/docs)
- 💬 [Vercel Community](https://github.com/vercel/vercel/discussions)