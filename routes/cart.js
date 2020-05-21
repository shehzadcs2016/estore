const express = require("express");
const router = express.Router();
const {createCart,allCarts}=require("../controllers/cart")

router.post("/cart", createCart)
router.get("/cart/:id", allCarts)
module.exports = router;
