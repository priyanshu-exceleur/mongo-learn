const express = require("express")
const routes = express.Router()
const pro_con = require("../controller/product")

routes.post("/", pro_con.createProducts)

module.exports = routes;

