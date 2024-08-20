const express = require("express")
const mongoose = require('mongoose');
const server = express()
const PORT = 8000
const routes = require("./routes/product")

server.use(express.json());
server.use("/", routes)

mongoose.connect('mongodb+srv://priyanshuMongo:Priyanshu%409876@cluster0.yzeye.mongodb.net/myDB');

server.listen(PORT, () => {
    console.log("Server Started On 8000 PORT")
})  