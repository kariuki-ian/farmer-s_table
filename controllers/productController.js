const Product = require("../models/product");

const ProductController = {
  createProduct: async (req, res) => {
    try {
      const { name, description, price, category, image } = req.body;
      const product = new Product({
        name,
        description,
        price,
        category,
        image,
      });
      await product.save();
      res
        .status(201)
        .json({ message: "Product created successfully", product });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getProductById: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  updateProduct: async (req, res) => {
    try {
      const { name, description, price, category, image } = req.body;
      const product = await Product.findByIdAndUpdate(
        req.params.id,
        { name, description, price, category, image },
        { new: true }
      );
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res
        .status(200)
        .json({ message: "Product updated successfully", product });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  deleteProduct: async (req, res) => {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = ProductController;
