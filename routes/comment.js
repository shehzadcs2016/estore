const express = require("express");
const router = express.Router();
const { commentClick,commentFetch } = require('../controllers/comment');
router.get("/comment/:id", commentFetch);

router.post("/post/comment/:id", commentClick);


module.exports = router;
