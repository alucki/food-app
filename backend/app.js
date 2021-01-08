// project configurations
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/postsRoutes");
const cors = require("cors");

const app = express(); // initialise app

// CORS: allows data to be requested from another domain
// outside the domain from which the data is being served
app.use(cors());

// middleware to parse request bodies to JSON
app.use(bodyParser.json());

// middleware to use our routes
app.use("/", routes);

module.exports = app;
