const express = require("express");
const routes = express.Router();
const userRoute = require("./user.route");

routes.use("/user",userRoute)

module.exports = routes;
