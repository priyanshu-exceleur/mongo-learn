const express = require("express")
const server = express()
const mongoose = require('mongoose');
const cors = require('cors')
const PORT = 8000
const Product_routes = require("./routes/product")
const User_Routes = require("./routes/user")
require("dotenv").config()


var corsOptions = {
    origin: ['http://localhost:3000','http://localhost:4200'],
    optionsSuccessStatus: 200
}

server.use(cors(corsOptions))
server.use(express.json());
server.use("/", Product_routes)
server.use("/user", User_Routes)

mongoose.connect(`${process.env.MONGO_URL}`);

server.listen(PORT, () => {
    console.log("Server Started On 8000 PORT")
})  