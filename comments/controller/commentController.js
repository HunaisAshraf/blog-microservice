const CommentsModel = require("../models/commentsModel");
const produce = require("../kafka/producer");

const addComment = async (req, res) => {
  try {
    const { user, post, comment } = req.body;

    const newComment = new CommentsModel({
      user,
      post,
      comment,
    });
    await newComment.save();
    await produce("add-comment", req.body);
    return res.json({
      success: true,
      message: "comment added successfully",
    });
  } catch (error) {
    console.log("error in adding comment", error);
  }
};

const getComments = async (req, res) => {
  try {
    const comments = await CommentsModel.find();

    return res.json({
      success: true,
      message: "users list",
      comments,
    });
  } catch (error) {
    console.log("error in get comments", error);
  }
};

module.exports = {
  addComment,
  getComments,
};
