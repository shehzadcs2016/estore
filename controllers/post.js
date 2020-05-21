const mongoose = require("mongoose");
const Post = require("./../models/posts");
const User = require("./../models/user");

exports.allPost = (req, res) => {
  try {
    Post.find()
      .sort({ created: -1 })
      .then(posts => {
        if (!posts) {
          return res.status(404).json({
            message: "posts are not longer in database"
          });
        }

        return res.status(200).json(posts);
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

exports.postByUser = (req, res) => {
  const id = req.params.id;
  Post.find({ postedBy: id })
    .then(posts => {
      if (!posts) {
        return res.status(404).json({
          message: "post is not existed"
        });
      }
      return res.status(200).json({
        posts: posts
      });
    })
    .catch(err => {
      res.status(400).json({
        error: err
      });
    });
};

exports.onePost = (req, res) => {
  const id = req.params.id;
  Post.findById(id)
    .then(posts => {
      if (!posts) {
        return res.status(404).json({
          message: "post is not existed"
        });
      }
      return res.status(200).json(posts);
    })
    .catch(err => {
      res.status(400).json({
        error: err
      });
    });
};

exports.PostedBy = async (req, res) => {
  const file = req.file;
  let id = req.params.id;

  const userData = await User.findById({ _id: id }).then(user => {
    if (!user) {
      return res.status(404).json({
        message: "post is not existed"
      });
    }
    return user;
  });

  try {
    const post = await Post.create(req.body);
    post.postedBy = userData;
    post.photo = file.path;
    post.save();
    return res
      .status(201)
      .send({ post, message: "post has successfully created" });
  } catch (e) {
    res.status(404).send({ e: e.message });
  }
};

exports.likePost = async (req, res) => {
  console.log(req.body.likes);
  const userData = await User.findById(req.body.userId).then(user => {
    if (!user) {
      return res.status(404).json({
        message: "post is not existed"
      });
    }
    return user;
  });
  const post = await Post.findOneAndUpdate(
    { _id: req.body.postId },
    {
      LikedBy: userData
      // likes: likes + 1
    },
    { new: true, useFindAndModify: false },
    (err, post) => {
      if (err) {
        return res.status(404).send({ message: "post is not updated" });
      }
      return res
        .status(200)
        .send({ post, message: "post has successfully updated" });
    }
  );
};

exports.unlikePost = async (req, res) => {
  const userData = await User.findById(req.body.userId).then(user => {
    if (!user) {
      return res.status(404).json({
        message: "post is not existed"
      });
    }
    return user;
  });
  const post = await Post.findOneAndUpdate(
    { _id: req.body.postId },
    {
      LikedBy: userData
    },
    { new: true },
    (err, post) => {
      if (err) {
        return res.status(404).send({ message: "post is not updated" });
      }
      return res
        .status(200)
        .send({ post, message: "post has successfully updated" });
    }
  );
};

exports.updatePost = async (req, res) => {
  const id = req.params.id;
  const { title, body } = req.body;

  // if(!title || !body |!path){
  //     return res.status(404).send({ message: "p" });
  // }
  const post = await Post.findOneAndUpdate(
    { _id: id },
    {
      title: title || undefined,
      body: body || undefined,
      photo: req.file.path || undefined
    },
    { new: true },
    (err, post) => {
      if (err) {
        return res.status(404).send({ message: "post is not updated" });
      }
      return res
        .status(200)
        .send({ post, message: "post has successfully updated" });
    }
  );

  // console.log(post);
};

exports.deletePost = (req, res) => {
  const id = req.params.id;
  try {
    Post.findOneAndDelete(id, (err, post) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "post is not deleted"
        });
      } else if (!post) {
        return res.status(404).json({
          success: false,
          message: "post has  already deleted"
        });
      } else {
        return res.status(200).json({
          success: true,
          message: "post has deleted"
        });
      }
    });
  } catch (e) {
    return res
      .status(404)
      .send({ message: "post is already removed", error: e.message });
  }
};
