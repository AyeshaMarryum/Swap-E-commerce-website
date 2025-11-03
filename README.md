# FinalSwap - E-commerce Platform

A full-stack e-commerce platform with separate frontend, admin dashboard, and backend API.

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd finalSwap2
   ```

2. **Set up Backend**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Edit .env with your credentials
   npm start
   ```

3. **Set up Frontend**
   ```bash
   cd frontend
   npm install
   cp .env.example .env
   # Edit .env with your backend URL
   npm run dev
   ```

4. **Set up Admin**
   ```bash
   cd admin
   npm install
   cp .env.example .env
   # Edit .env with your backend URL
   npm run dev
   ```

## 📦 Project Structure

```
finalSwap2/
├── frontend/          # Main user-facing application (Vite + React)
├── admin/            # Admin dashboard (Vite + React)
├── backend/          # API server (Express.js + MongoDB)
└── .github/          # GitHub Actions workflows
```

## 🌐 Deployment

This project is configured for deployment on Vercel. See the deployment guides:

- **Quick Setup**: [VERCEL_SETUP.md](./VERCEL_SETUP.md)
- **Full Guide**: [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Checklist**: [DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md)

### Deployment Steps

1. Deploy Backend API first
2. Deploy Frontend (with backend URL)
3. Deploy Admin (with backend URL)

See [VERCEL_SETUP.md](./VERCEL_SETUP.md) for detailed instructions.

## 🔧 Environment Variables

### Backend
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT tokens
- `CLOUDINARY_NAME` - Cloudinary cloud name
- `CLOUDINARY_API_KEY` - Cloudinary API key
- `CLOUDINARY_SECRET_KEY` - Cloudinary secret key

### Frontend & Admin
- `VITE_API_URL` - Backend API URL

See `.env.example` files in each directory for complete list.

## 🧪 GitHub Actions

The repository includes a GitHub Actions workflow that checks:
- Project structure
- Required configuration files
- Package dependencies
- Build scripts

**Note**: The workflow checks structure only. Actual builds happen on Vercel during deployment.

## 📚 Tech Stack

### Frontend & Admin
- React 18/19
- Vite
- Tailwind CSS v3
- React Router v7
- Axios

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- Cloudinary (image uploads)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 🆘 Support

For deployment issues, see:
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Full deployment guide
- [Vercel Documentation](https://vercel.com/docs)

For development issues:
- Check the console logs
- Verify environment variables
- Ensure all dependencies are installed