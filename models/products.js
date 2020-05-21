const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  title: {
    type: String,
    // required:"Title is required",
    minlength: 4,
    maxlength: 150
  },
  body: {
    type: String,
    // required:"body is required",
    minlength: 4,
    maxlength: 2000
  },
  photo: {
    type: {}
  },
  category: {
    type:String
  },
  
  price: {
    type:Number
  },
  discount: {
    type:Number
  },
  
  comment: {
    type: {},
    ref: "comment"
  },
  
  created: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model("Product", productSchema);
