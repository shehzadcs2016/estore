const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const commentSchema = new mongoose.Schema({
  comment: {
    type: String,
    // required:"Title is required",
    minlength: 4,
    maxlength: 150
  },
  user: {
    type:{}
  },
    post: {
        type: ObjectId,
        ref:"post"
    },
  commentedBy: {
    type: {}
  },
  created: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model("Comment", commentSchema);
