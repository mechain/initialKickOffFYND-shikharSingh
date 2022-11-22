// dependency 
require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");


// modules
const Response = require("./utils/response.utils")
const route = require("./routes/routes.index")
const connect = require("./models/connection")








route(app)

connect()







app.listen(process.env.PORT , () => {
    console.log(`Server Running http://localhost:${process.env.PORT}`)
})