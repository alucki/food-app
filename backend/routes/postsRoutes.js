const express = require("express");
const router = express.Router();

const postController = require("../controllers/postController");

router.get("/", postController.baseRoute);

router.get("/getPosts", postController.getPosts);

router.post("/createPost", postController.createPost);

router.get("/getPost/:id", postController.getPost);

router.put("/post/:id/update", postController.updatePost);

router.delete("/post/:id/delete", postController.deletePost);

module.exports = router;
