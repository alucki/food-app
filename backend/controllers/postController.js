const mongoose = require("mongoose");
const Posts = mongoose.model("posts");

exports.baseRoute = async (req, res) => {
  res.send("Server is up and running");
};

exports.getPosts = async (req, res) => {
  // find method queries the DB using our schema and assigns to a variable
  const posts = await Posts.find();
  // send the variable as a JSON response
  res.json(posts);
};
