const express = require('express')
const userController = require("../controllers/controller.user")
const userRoute = express.Router()

userRoute.get("/getallusers", userController.getAllUsers)

module.exports = userRoute