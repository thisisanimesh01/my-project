import mongoose from "mongoose";

// Variant Schema (nested)
const variantSchema = new mongoose.Schema({
  color: String,
  size: String,
  stock: Number
});

// Product Schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: Number,
  variants: [variantSchema]
});

const Product = mongoose.model("Product", productSchema);

export default Product;
