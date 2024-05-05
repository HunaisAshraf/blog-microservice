const express = require("express");
const { getComments, addComment } = require("../controller/commentController");
const router = express.Router();

router.get("/getcomments", getComments);

router.post("/addcomment", addComment);

module.exports = router;
