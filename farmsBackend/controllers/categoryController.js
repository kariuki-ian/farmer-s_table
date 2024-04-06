const Category = require("../models/category");

const CategoryController = {
  createCategory: async (req, res) => {
    try {
      /*if (req.user.role !== "admin") {
        return res.status(403).json({ message: "Forbidden" });
      }*/
      const { name } = req.body;
      const category = new Category({ name });
      await category.save();
      res
        .status(201)
        .json({ message: "Category created successfully", category });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getAllCategories: async (req, res) => {
    try {
      const categories = await Category.find();
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getCategoryById: async (req, res) => {
    try {
      const category = await Category.findById(req.params.id);
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }
      res.status(200).json(category);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  updateCategory: async (req, res) => {
    try {
      if (req.user.role !== "admin") {
        return res.status(403).json({ message: "Forbidden" });
      }
      const { name } = req.body;
      const category = await Category.findByIdAndUpdate(
        req.params.id,
        { name },
        { new: true }
      );
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }
      res
        .status(200)
        .json({ message: "Category updated successfully", category });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  deleteCategory: async (req, res) => {
    try {
      if (req.user.role !== "admin") {
        return res.status(403).json({ message: "Forbidden" });
      }
      const category = await Category.findByIdAndDelete(req.params.id);
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }
      res.status(200).json({ message: "Category deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = CategoryController;
