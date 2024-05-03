const PostModel = require("../models/postModel");

const addPost = async (req, res) => {
  try {
    const { user, post } = req.body;

    const newPost = new PostModel({
      user,
      post,
    });
    await newPost.save();

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

module.exports = {
  addPost,
  getPost,
};
