// project configurations
const express = require("express");
const app = express(); // initialise app

app.get("/", (req, res) => {
  res.send("Server is up and running");
});

module.exports = app;
