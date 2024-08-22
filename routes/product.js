const express = require("express")
const routes = express.Router()
const pro_con = require("../controller/product")

routes.post("/", pro_con.createProducts)
routes.post("/update/:id", pro_con.updateProduct)
routes.get("/", pro_con.getAllProducts)
routes.get("/user", pro_con.getProduct)
routes.delete("/user/:id", pro_con.deleteProduct)
routes.delete("/deleteAll", pro_con.deleteAllProduct)

module.exports = routes;

