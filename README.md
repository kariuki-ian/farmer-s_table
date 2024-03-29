Project API Documentation
This project is a RESTful API built with Node.js and Express. It provides endpoints for managing users, products, orders, and categories.

User Routes
POST /users/register: Register a new user. The request body should include username, email, and password.

POST /users/login: Login a user. The request body should include email and password.

GET /users/profile: Get the profile of the currently logged in user. Requires authentication.

PUT /users/profile: Update the profile of the currently logged in user. Requires authentication.

GET /users: Get all users. Requires authentication.

PUT /users/:id/role: Update the role of a user. Requires authentication.

Product Routes
POST /products: Create a new product. The request body should include name, description, price, category, and image.

GET /products: Get all products.

GET /products/:id: Get a product by its ID.

PUT /products/:id: Update a product by its ID. The request body should include the fields to be updated.

DELETE /products/:id: Delete a product by its ID.

Order Routes
POST /orders: Create a new order. The request body should include userId, productId, and quantity.

GET /orders: Get all orders.

GET /orders/:id: Get an order by its ID.

PUT /orders/:id: Update an order by its ID. The request body should include the fields to be updated.

DELETE /orders/:id: Delete an order by its ID.

Category Routes
POST /categories: Create a new category. The request body should include name.

GET /categories: Get all categories.

GET /categories/:id: Get a category by its ID.

PUT /categories/:id: Update a category by its ID. The request body should include the fields to be updated.

DELETE /categories/:id: Delete a category by its ID.

Please note that some routes require authentication. To authenticate, include the token received upon login in the Authorization header of your requests.
