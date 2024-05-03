const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  post: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Post", postSchema);
