const mongoose = require("mongoose");
const { categories, users, products } = require("./Seed/seedData");
const Category = require("./models/category");
const User = require("./models/user");
const Product = require("./models/product");
require("dotenv").config();
// Connect to MongoDB
console.log(process.env.CONNECTION_STRING);
mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Connected to MongoDB");

    // Seed categories
    await Category.insertMany(categories);

    // Seed users
    await User.insertMany(users);

    // Seed products
    // First, map category names to category IDs
    const categoryMap = {};
    const categoryDocs = await Category.find();
    categoryDocs.forEach((category) => {
      categoryMap[category.name] = category._id;
    });
    // Replace category names with category IDs in products data
    const productsWithCategoryIds = products.map((product) => {
      return { ...product, category: categoryMap[product.category] };
    });
    await Product.insertMany(productsWithCategoryIds);

    console.log("Seed data inserted successfully");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  })
  .finally(() => {
    // Close the connection
    mongoose.connection.close();
  });
