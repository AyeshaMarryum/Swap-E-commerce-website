import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import dashboardRoutes from "./routes/dashboardRoute.js";
import feedbackRoutes from "./routes/feedbackRoute.js";
import sentimentRoute from "./routes/Sentiment.js";

// Temporary fix: Set JWT_SECRET if not in environment
if (!process.env.JWT_SECRET) {
  process.env.JWT_SECRET = "your_super_secret_jwt_key_2025_final_swap_project";
  console.log("⚠️  JWT_SECRET not found in environment, using default");
}

//APP CONFIG
const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB and Cloudinary
connectDB();
connectCloudinary();

// middlewares
app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "https://swap-ecommerce-admin-37v0p8uli-ayesha-marryums-projects.vercel.app/",
      "https://swap-e-commerce-website.vercel.app/",
    ],
    credentials: true,
  })
);

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization', "token"],
  credentials: true
}))

// Handle preflight requests for all routes
app.options('*', cors())

// API routes
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/Sentiment", sentimentRoute);
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// Health check endpoint
app.get("/", (req, res) => {
  res.send("API WORKING");
});

// Start server
if (!process.env.VERCEL) {
  app.listen(port, () => {
    console.log("Server Started on Port : " + port);
    console.log("MongoDB URI from env:", process.env.MONGODB_URI);
    console.log("JWT_SECRET present:", !!process.env.JWT_SECRET);
    console.log(
      "JWT_SECRET length:",
      process.env.JWT_SECRET ? process.env.JWT_SECRET.length : 0
    );
  });
}

export default app;
