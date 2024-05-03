const express = require("express");
const { getPost, addPost } = require("../controller/postController");
const router = express.Router();

router.get("/getposts", getPost);

router.post("/addpost", addPost);

module.exports = router;
