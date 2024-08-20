const express = require("express")
const server = express()
const PORT = 8000


server.get("/users", (req, res) => {
    res.json({
        "name": "Priyanshu",
        "contact": "123456789",
        "age": "21"
    })
})

server.listen(PORT, () => {
    console.log("Server Started On 8000 PORT")
})