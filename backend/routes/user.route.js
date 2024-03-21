const express = require("express");
const { userController } = require("../controller");
const { authenticate } = require("../middleweres/auth");
const route = express.Router();

route.post("/register", userController.registerUser);
route.post("/login", userController.loginUser);
route.post("/addmedicine", userController.addMedicine);
route.get("/getmedicine", authenticate, userController.getMedicine);

module.exports = route;
