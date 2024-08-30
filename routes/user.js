const express = require("express")
const router = express.Router()
const User_Controller = require("../controller/user")

router.post("/register", User_Controller.createUser)
router.post("/login", User_Controller.loginUser)

module.exports = router