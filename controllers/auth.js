const User = require("../models/user");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

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

exports.signUp = async (req, res) => {
  if (!req.body.email || !req.body.password || !req.body.name) {
    return res.status(400).send({ message: "all fields are required*" });
  }
  try {
    const user = await User.create(req.body);
    user.photo = req.file || "";
    // console.log(user);
    user.save();
    const token = newToken(user);
    return res.status(200).send({
      token,
      user,
      message: "Account has succefully created,please Login"
    });
  } catch (e) {
    res.status(404).send({ message: "user already existed", error: e.message });
  }
};

exports.signIn = async (req, res) => {
  console.log(req.body);
  if (!req.body.email || !req.body.password) {
    return res.status(400).send({ message: "need email and password" });
  }

  const invalid = { message: "Invalid email and passoword combination" };

  try {
    const user = await User.findOne({ email: req.body.email }).exec();
    if (!user) {
      return res.status(401).send(invalid);
    }

    const match = await user.checkPassword(req.body.password);

    if (!match) {
      return res.status(401).send(invalid);
    }

    const token = newToken(user);
    const cookie = res.cookie("token", token, { expire: new Date() + 9999 });

    return res
      .status(201)
      .send({ token, user, message: "user is successfully logged in" });
  } catch (e) {
    // console.error(e);
    return res.status(500).send({ error: e.message });
  }
};

exports.protect = async (req, res, next) => {
  const bearer = req.headers.authorization;

  if (!bearer || !bearer.startsWith("Bearer ")) {
    return res.status(401).send({ message: "must a be a token" });
  }

  const token = bearer.split("Bearer ")[1].trim();
  let payload;
  try {
    payload = await verifyToken(token);
  } catch (e) {
    return res.status(401).end();
  }

  const user = await User.findById(payload.id)
    .select("-password")
    .lean()
    .exec();

  if (!user) {
    return res.status(401).send({ message: "user does not existed" });
  }

  req.user = user;
  next();
};
exports.signOut = (req, res) => {
  res.clearCookie("token");
  return res.json({ message: "user has successfully logged out" });
};
