const Order = require("../models/order");

const OrderController = {
  createOrder: async (req, res) => {
    try {
      const { userId, products, totalAmount, status } = req.body;
      const order = new Order({ userId, products, totalAmount, status });
      await order.save();
      res.status(201).json({ message: "Order created successfully", order });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getAllOrders: async (req, res) => {
    try {
      const orders = await Order.find();
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getOrderById: async (req, res) => {
    try {
      const order = await Order.findById(req.params.id);
      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }
      res.status(200).json(order);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  updateOrder: async (req, res) => {
    try {
      const { userId, products, totalAmount, status } = req.body;
      const order = await Order.findByIdAndUpdate(
        req.params.id,
        { userId, products, totalAmount, status },
        { new: true }
      );
      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }
      res.status(200).json({ message: "Order updated successfully", order });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  deleteOrder: async (req, res) => {
    try {
      const order = await Order.findByIdAndDelete(req.params.id);
      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }
      res.status(200).json({ message: "Order deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = OrderController;
