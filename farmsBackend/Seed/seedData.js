const categories = [
  { name: "Fruits" },
  { name: "Vegetables" },
  { name: "Dairy Products" },
];

const users = [
  {
    name: "Admin",
    email: "admin@example.com",
    password: "adminpassword",
    role: "admin",
  },
  {
    name: "User",
    email: "user@example.com",
    password: "userpassword",
    role: "customer",
  },
];

const products = [
  { name: "Apple", price: 1.99, category: "Fruits" },
  { name: "Banana", price: 0.99, category: "Fruits" },
  { name: "Carrot", price: 0.49, category: "Vegetables" },
  { name: "Milk", price: 2.49, category: "Dairy Products" },
];

module.exports = { categories, users, products };
