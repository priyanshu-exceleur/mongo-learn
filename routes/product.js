const express = require("express")
const routes = express.Router()
const pro_con = require("../controller/product")

routes.post("/", pro_con.createProducts)
routes.get("/", pro_con.getAllProducts)
routes.get("/user", pro_con.getProduct)
routes.delete("/user/:id", pro_con.deleteProduct)

module.exports = routes;

