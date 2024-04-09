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
  {
    name: "Apple",
    price: 1.99,
    category: "Fruits",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt2Fx-JiFNXGKz3HBmBMF-NCzyMOd6hzlZbzZ65lRWgg&s",
    description: "Fresh Japanese Pink Apple",
  },
  {
    name: "Banana",
    price: 0.99,
    category: "Fruits",
    description: "Fresh Banana",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxYmEdP_uiCGqT0f1S4VYitgNUs38iqic1yieRUpg5mg&s",
  },
  {
    name: "Carrot",
    price: 0.49,
    category: "Vegetables",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Q1VYq0wVw1VgYqf9v4h8pQ1Qy9fG5rQs5nJ2Z1w&s",
    description: "Fresh Carrot",
  },
  {
    name: "Milk",
    price: 2.49,
    category: "Dairy Products",
    description: "Fresh Milk",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Z6",
  },
  {
    name: "Strawberry",
    price: 3.49,
    category: "Fruits",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn-stawberry&s",
    description: "Organic strawberries packed with flavor.",
  },
  {
    name: "Lettuce",
    price: 1.49,
    category: "Vegetables",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcLettuce&s",
    description: "Freshly picked green lettuce.",
  },
  {
    name: "Cheese",
    price: 4.99,
    category: "Dairy Products",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcCheese&s",
    description: "Aged cheddar cheese.",
  },
  {
    name: "Tomato",
    price: 2.99,
    category: "Vegetables",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTomato&s",
    description: "Ripe tomatoes perfect for salads.",
  },
  {
    name: "Blueberries",
    price: 3.99,
    category: "Fruits",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcBlueberries&s",
    description: "Wild blueberries, full of antioxidants.",
  },
  {
    name: "Yogurt",
    price: 0.99,
    category: "Dairy Products",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcYogurt&s",
    description: "Creamy natural yogurt with live cultures.",
  }
];

module.exports = { categories, users, products };
