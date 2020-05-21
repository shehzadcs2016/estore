const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const { signUp, signIn, protect, signOut } = require("../controllers/auth");
const path = require("path");
const multer = require("multer");
var storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, "./uploads");
  },
  filename: function(req, file, callback) {
    callback(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  }
});
// const fileFilter = (req, file, cb) => {
//   if (file.mimetype === "image/png") {
//     cb(null, true);
//   }
// };

var upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  }
});

router.post("/signUp", upload.single("photo"), signUp);
router.post("/signIn", signIn);
router.get("/signOut", signOut);

module.exports = router;
