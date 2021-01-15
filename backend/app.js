// project configurations
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/postsRoutes");
const cors = require("cors");
const morgan = require("morgan");

// In Node.js and Express, middleware is a function
// that has access to the request and response lifecycle methods,
// and the next() method to continue logic in your Express server.

const app = express(); // initialise app

// CORS: allows data to be requested from another domain
// outside the domain from which the data is being served
app.use(cors());

// middleware to parse request bodies to JSON
app.use(bodyParser.json());

// morgan's built-in method, identify the URL,
// declare a status, and the request’s response time in milliseconds
app.use(morgan("tiny"));

// middleware to use our routes
app.use("/", routes);

module.exports = app;
