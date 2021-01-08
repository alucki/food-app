const express = require("express");
const router = express.Router();

const postController = require("../controllers/postController");

router.get("/", postController.baseRoute);

router.get("/getPosts", postController.getPosts);

module.exports = router;
