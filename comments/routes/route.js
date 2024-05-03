const express = require("express");
const { getComments, addComment } = require("../controller/postController");
const router = express.Router();

router.get("/getcomments", getComments);

router.post("/addcomment", addComment);

module.exports = router;
