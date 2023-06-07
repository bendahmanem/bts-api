const express = require("express");

const postController = require("../controller/post");

const router = express.Router();

router.get("/posts", postController.getPosts);

module.exports = router;
