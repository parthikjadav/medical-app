const express = require('express');
const { userController } = require('../controller');
const route = express.Router();

route.post("/register",userController.registerUser)
route.post("/login",userController.getUser)
route.post("/addmedicine",userController.addMedicine)
route.get("/getmedicine",userController.getMedicine)

module.exports = route;