import express from "express";
import mongoose from "mongoose";
import productRoutes from "./routes/productRoutes.js";

const app = express();
app.use(express.json());
// server.js
app.get("/", (req, res) => {
  res.send("Welcome to the E-commerce Catalog API! Use /api/products endpoints.");
});


// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/ecommerceCatalog", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log("❌ MongoDB Error:", err));

// Routes
app.use("/api/products", productRoutes);

// Start Server
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
