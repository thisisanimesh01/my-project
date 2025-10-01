import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// 🔹 Seed Data
router.post("/seed", async (req, res) => {
  try {
    await Product.deleteMany();

    const sampleProducts = [
      {
        name: "T-Shirt",
        category: "Clothing",
        price: 499,
        variants: [
          { color: "red", size: "M", stock: 10 },
          { color: "blue", size: "L", stock: 5 },
          { color: "black", size: "S", stock: 2 }
        ]
      },
      {
        name: "Sneakers",
        category: "Footwear",
        price: 1999,
        variants: [
          { color: "white", size: "42", stock: 8 },
          { color: "black", size: "40", stock: 3 }
        ]
      }
    ];

    const created = await Product.insertMany(sampleProducts);
    res.json({ message: "✅ Seeded successfully", products: created });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 🔹 Filter by Category
router.get("/filter", async (req, res) => {
  const category = req.query.category;
  try {
    const products = await Product.find({ category });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 🔹 Get Variants by Color (Aggregation + $filter)
router.get("/variants/:color", async (req, res) => {
  const color = req.params.color;
  try {
    const products = await Product.aggregate([
      {
        $project: {
          name: 1,
          category: 1,
          price: 1,
          variants: {
            $filter: {
              input: "$variants",
              as: "variant",
              cond: { $eq: ["$$variant.color", color] }
            }
          }
        }
      }
    ]);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
