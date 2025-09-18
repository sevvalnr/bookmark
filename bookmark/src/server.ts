import express from "express";
import mongoose from "mongoose";
import bookRoutes from "./routes/bookRoutes"; // path doğru olmalı

const app = express();
app.use(express.json());

// CORS ekle (opsiyonel ama Postman veya frontend için iyi)
import cors from "cors";
app.use(cors());

// Basit test route
app.get("/", (req, res) => {
  res.send("🚀 API is running without JWT check");
});

// ✅ Book CRUD routes
app.use("/api/books", bookRoutes);

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/bookmarkdb";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () =>
      console.log(`🚀 Server running at http://localhost:${PORT}`)
    );
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));
