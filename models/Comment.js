const { Schema } = require("mongoose");

const CommentSchema = new Schema({
  writtenBy: {
    type: String,
  },
  CommentBody: {
    type: String,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

const Comment = model("Comment", CommentSchema);

module.exports = Comment;
