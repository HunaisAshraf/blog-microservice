const produce = require("../../auth/kafka/producer");
const PostModel = require("../models/postModel");
const UserModel = require("../models/userModel");
const CommentsModel = require("../models/commentsModel");

const addPost = async (req, res) => {
  try {
    const { user, post } = req.body;

    const newPost = new PostModel({
      user,
      post,
    });
    await newPost.save();

    await produce("add-post", req.body);

    return res.json({
      success: true,
      message: "post added successfully",
    });
  } catch (error) {
    console.log("error in adding user", error);
  }
};

const getPost = async (req, res) => {
  try {
    const post = await PostModel.find();

    return res.json({
      success: true,
      message: "users list",
      post,
    });
  } catch (error) {
    console.log("error in get post", error);
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
const addComment = async (comment) => {
  try {
    const newComment = new CommentsModel(comment);
    await newComment.save();
    console.log("new comment added in comment");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addPost,
  getPost,
  addUser,
  addComment,
};
