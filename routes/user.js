const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const {
  allUser,
  oneUser,
  updateUser,

  deleteUser
} = require("../controllers/user");
const { protect } = require("../controllers/auth");
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

// router.post("/signUp", upload.single("photo"), signUp);
router.get("/user", allUser);
router.get("/user/:id", oneUser);
router.patch("/user/:id", upload.single("photo"), updateUser);
router.delete("/user/:id", deleteUser);

module.exports = router;
