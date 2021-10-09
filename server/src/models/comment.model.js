const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
  {
    show: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "show",
      required: true,
    },
    username: { type: String, required: true },
    message: { type: String, required: true },
    at: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

const Comment = mongoose.model("comment", commentSchema);

module.exports = Comment;
