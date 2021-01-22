// main entry point of project: make DB connections, import app.js, start the server
const mongoose = require("mongoose");

require("dotenv").config({ path: ".env" });

// DB connection
mongoose.connect(process.env.DATABASE, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.Promise = global.Promise; // Tell mongoose to use ES6 promises
mongoose.connection.on("error", (err) => {
  console.error(`Database Connection Error: ${err.message}`);
});

// require models here so they can be accessed throughout app
require("./models/recipes");

const app = require("./app");

const server = app.listen(3000, () => {
  console.log(`Express running on port ${server.address().port}`);
});
