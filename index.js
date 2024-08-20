const express = require("express")
const mongoose = require('mongoose');
const server = express()
const PORT = 8000
const routes = require("./routes/product")
require("dotenv").config()


server.use(express.json());
server.use("/", routes)

mongoose.connect(`${process.env.MONGO_URL}`);

server.listen(PORT, () => {
    console.log("Server Started On 8000 PORT")
})  