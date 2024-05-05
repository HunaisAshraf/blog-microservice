const CommentsModel = require("../models/commentsModel");
const UserModel = require("../models/userModel");
const PostModel = require("../models/postModel");
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

const addUser = async (user) => {
  try {
    const newUser = new UserModel(user);
    await newUser.save();
    console.log("new user added in comment");
  } catch (error) {
    console.log(error);
  }
};
const addPost = async (post) => {
  try {
    const newComment = new PostModel(comment);
    await newComment.save();
    console.log("new comment added in comment");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addComment,
  getComments,
  addUser,
  addPost,
};
