var express = require("express")
var bodyParse = require("body-parser")
var mongoose = require("mongoose")

const app = express()

app.get("/", (req, res) => {
    res.send("Server running")
}).listen(3000);
console.log("Server is running at port 3000")