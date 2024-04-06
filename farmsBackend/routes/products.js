const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/productController");

// POST /products
router.post("/", ProductController.createProduct);

// GET /products
router.get("/", ProductController.getAllProducts);

// GET /products/:id
router.get("/:id", ProductController.getProductById);

// PUT /products/:id
router.put("/:id", ProductController.updateProduct);

// DELETE /products/:id
router.delete("/:id", ProductController.deleteProduct);

module.exports = router;
