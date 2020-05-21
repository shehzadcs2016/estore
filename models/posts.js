const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    // required:"Title is required",
    minlength: 4,
    maxlength: 150
  },
  body: {
    type: String,
    // required:"body is required",
    minlength: 4,
    maxlength: 2000
  },
  photo: {
    type: String
  },
  postedBy: {
    type: {}
  },

  created: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model("Post", postSchema);
