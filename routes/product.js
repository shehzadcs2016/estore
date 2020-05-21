const express = require("express");
const router = express.Router();
const { allProduct,postProduct ,SingleProduct,DeleteProduct,search, UpdateProduct} = require("../controllers/product");
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

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/png/jpg/jpeg") {
    cb(null, true);
  }
};

var upload = multer({
  storage: storage,
    limits: {
      files:5,
      fileSize: 1024 * 1024 * 5,
    fileFilter:fileFilter
    }
});
router.post("/products",upload.array("photo",5),postProduct)

router.get("/products", allProduct);
router.get("/products/:id", SingleProduct);
router.delete("/products/:id", DeleteProduct);
router.patch("/products/:id",upload.array("photo",5), UpdateProduct);

router.get("/search/:id", search);




module.exports = router;