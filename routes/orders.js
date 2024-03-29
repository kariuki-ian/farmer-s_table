const express = require("express");
const router = express.Router();
const OrderController = require("../controllers/orderController");

// POST /orders
router.post("/", OrderController.createOrder);

// GET /orders
router.get("/", OrderController.getAllOrders);

// GET /orders/:id
router.get("/:id", OrderController.getOrderById);

// PUT /orders/:id
router.put("/:id", OrderController.updateOrder);

// DELETE /orders/:id
router.delete("/:id", OrderController.deleteOrder);

module.exports = router;
