const mongoose = require("mongoose");
const Comment = require("../models/comment");



exports.commentFetch = (req, res) => {
  
  try {
    Comment.find({post:req.params.id}).sort({"created": -1})
      .then(comment => {
        if (!comment) {
          return res.status(404).json({
            message: "comment are not longer in database"
          });
        }

        return res.status(200).json(comment);
      })
      .catch(err => {
        return res.status(404).json({
          error: err.message
        });
      });
  } catch (e) {
    return res.status(404).json({
      error: e.message
    });
  }
};

exports.commentClick = async (req, res) => {
  let id = req.params.id;
  
  try {
    const comment = await Comment.create(req.body);
    comment.post = id;
    comment.save();
    return res
      .status(201)
      .send({ comment, message: "comment has successfully created" });
  } catch (e) {
    res.status(404).send({ e: e.message });
  }
};