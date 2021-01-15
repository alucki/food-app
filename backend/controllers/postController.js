const mongoose = require("mongoose");
// what does this do?
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

exports.createPost = async (req, res) => {
  await new Posts(req.body).save((err, data) => {
    if (err) {
      res.status(500).json({
        message: "Something went wrong, please try again",
      });
    } else {
      res.status(200).json({
        message: "Post created",
        data,
      });
    }
  });
};

exports.getPost = async (req, res) => {
  const postId = req.params.id;

  await Posts.findById({ _id: postId }, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "Something went wrong, please try again",
      });
    } else {
      res.status(200).json({
        message: "Post found",
        data,
      });
    }
  });
};

exports.updatePost = async (req, res) => {
  const postId = req.params.id;

  await Posts.findByIdAndUpdate(
    { _id: postId },
    { $set: req.body },
    (err, data) => {
      if (err) {
        res.status(500).json({
          message: "Something went wrong, please try again",
        });
      } else {
        res.status(200).json({
          message: "Post updated",
          data,
        });
      }
    }
  );
};

exports.deletePost = async (req, res) => {
  const postId = req.params.id;

  await Posts.deleteOne({ _id: postId }, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "Something went wrong, please try again",
      });
    } else {
      res.status(200).json({
        message: "Post deleted",
        data,
      });
    }
  });
};
