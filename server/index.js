// Load environment variables
import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// Import database connection
import connectDB from "./config/db.js";

// Import routes
import itemsRouter from "./routes/items.js";

// Create Express app
const app = express();

// Connect to MongoDB
await connectDB(); // This will exit process on failure

// Middleware
app.use(cors());
app.use(express.json()); // No need for body-parser anymore

// Routes
app.use("/api/items", itemsRouter);

// Health check route (optional but recommended)
app.get("/", (req, res) => {
  res.status(200).json({ message: "API is running 🚀" });
});

// Handle MongoDB errors after initial connection
mongoose.connection.on("error", (err) => {
  console.error("Atlas DB Error:", err);
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running on port ${PORT}`);
});

