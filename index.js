const express = require("express")
const server = express()
const mongoose = require('mongoose');
const cors = require('cors')
const PORT = 8000
const routes = require("./routes/product")
require("dotenv").config()


var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

server.use(cors(corsOptions))
server.use(express.json());
server.use("/", routes)

mongoose.connect(`${process.env.MONGO_URL}`);

server.listen(PORT, () => {
    console.log("Server Started On 8000 PORT")
})  