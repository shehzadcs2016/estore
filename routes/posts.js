const express = require("express");
const router = express.Router();
const {
  allPost,
  onePost,
  deletePost,
  // uploadPost,
  postByUser,
  updatePost,
  likePost,
  unlikePost,
  
  PostedBy
} = require("../controllers/post");
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
router.patch("/post/like", likePost);
router.patch("/post/unlike", unlikePost);
router.get("/post", allPost);

router.get("/post/:id", onePost);
router.get("/post/user/:id", postByUser);

// router.post("/post", upload.single("photo"), uploadPost);
router.post("/post/:id", upload.single("photo"), PostedBy);

router.patch("/post/:id", upload.single("photo"), updatePost);

router.delete("/post/:id", deletePost);

module.exports = router;
