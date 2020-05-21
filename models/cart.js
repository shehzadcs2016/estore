const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const cartSchema = new mongoose.Schema({
  product: {
    type: {},
  },
  user: {
    type: ObjectId,
    ref:'user'
  },
  created: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model("Cart", cartSchema);
