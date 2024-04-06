const express = require("express");
const router = express.Router();
const CategoryController = require("../controllers/categoryController");

const auth = require("../middleware/auth");
// GET /categories
router.get("/", CategoryController.getAllCategories);

// GET /categories/:id
router.get("/:id", CategoryController.getCategoryById);

// POST /categories
router.post("/", CategoryController.createCategory);

// PUT /categories/:id
router.put("/:id", auth, CategoryController.updateCategory);

// DELETE /categories/:id
router.delete("/:id", auth, CategoryController.deleteCategory);

module.exports = router;
