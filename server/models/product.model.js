const mongoose = require("mongoose");

// DEFINE SCHEMA
const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Product title is required"],
      minLength: [2, "Title must be at least 2 characters"],
    },
    price: {
      type: Number,
      required: [true, "Product price must be provided"],
      min: [0, "Price must be more than 0"],
      max: [9000, "Price must be less than 9000"],
    },
    description: {
      type: String,
      required: [true, "Product description is required"],
      minLength: [5, "Description must be longer than 5 characters"],
    },
    // SET createdAt / updatedAt
  },
  { timestamps: true }
);

// REGISTER SCHEMA
const Product = mongoose.model("Product", ProductSchema);

// EXPORT MODEL
module.exports = Product;
