const bcrypt = require("bcrypt");
const User = require("../models/user");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const newToken = user => {
  return jwt.sign({ id: user.id }, "used123", {
    expiresIn: "100d"
  });
};
const verifyToken = token =>
  new Promise((resolve, reject) => {
    jwt.verify(token, "used123", (err, payload) => {
      if (err) return reject(err);
      resolve(payload);
    });
  });

exports.allUser = (req, res) => {
  return User.find()

    .then(user => {
      if (!user) {
        return res.status(404).json({
          message: " users are not existed"
        });
      }
      return res.status(200).json(user);
    })
    .catch(err => {
      return res.status(400).json({
        error: err
      });
    });
};
exports.oneUser = (req, res) => {
  const id = req.params.id;

  return User.findById(id)
    .then(user => {
      if (!user) {
        return res.status(404).json({
          message: " user is not existed"
        });
      }
      res.status(202).json({
        user: user
      });
    })
    .catch(err => {
      res.status(404).json({
        error: err
      });
    });
};

exports.updateUser = async (req, res) => {
  const id = req.params.id;
  var { name, email, password } = req.body;

  const post = await User.findOneAndUpdate(
    { _id: id },
    {
      name: name || undefined,
      email: email || undefined,
      password: password || undefined,
      photo: req.file.path || undefined
    },
    { new: true, useFindAndModify: false },
    (err, user) => {
      if (err) {
        return res.status(404).send({ message: "user is not updated" });
      }
      return res
        .status(200)
        .send({ user, message: "user has successfully updated" });
    }
  );
};

exports.deleteUser = (req, res) => {
  const id = req.params.causeId;

  try {
    User.findOneAndDelete(id, (err, user) => {
      if (!user) {
        return res.status(404).json({
          success: false,
          message: "user has  already deleted"
        });
      } else {
        return res.status(200).json({
          success: true,
          message: "user has deleted"
        });
      }
    });
  } catch (e) {
    return res.status(404).send({ error: e.message });
  }
};
