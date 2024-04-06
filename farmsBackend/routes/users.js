const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");
const auth = require("../middleware/auth");

// POST /users/register
router.post("/register", UserController.register);

// POST /users/login
router.post("/login", UserController.login);

// GET /users/profile
router.get("/profile", auth, UserController.getUserProfile);

// PUT /users/profile
router.put("/profile", auth, UserController.updateUserProfile);

// GET /users
router.get("/", auth, UserController.getAllUsers);

// PUT /users/:id/role
router.put("/:id/role", auth, UserController.updateUserRole);

module.exports = router;
