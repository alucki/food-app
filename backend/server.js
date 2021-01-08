// main entry point of project: make DB connections, import app.js, start the server
const app = require("./app");

const server = app.listen(3000, () => {
  console.log(`Express running on port ${server.address().port}`);
});
