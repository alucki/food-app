// project configurations
const express = require("express");
const app = express(); // initialise app

// import routes
const routes = require("./routes/postsRoutes");

// middleware to use our routes
app.use("/", routes);

module.exports = app;
