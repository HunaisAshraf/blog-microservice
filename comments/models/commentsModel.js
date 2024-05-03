const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
    },
    post: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Comment", commentSchema);
