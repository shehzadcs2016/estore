const Cart = require("./../models/cart");


exports.createCart = async (req, res) => {
      const person = await Cart.findOne({ user: req.body.user }).select("user").lean();
    const post =await Cart.findOne({ product: req.body.product }).select("product").lean();
    
    // console.log(post)
    // if
  if (!post) {
    if (!person) {
      
          try {
            var cart = await Cart.create(req.body);
            cart.save();
            return res.status(200).send({cart,message:"cart has successfully created"})
          }
          catch (e) {
            res.status(400).send({error:e.message})
          }
      
    }
    else {
      
  try {
    var cart = await Cart.create(req.body);
    cart.save();
    return res.status(200).send({cart,message:"cart has successfully created"})
  }
  catch (e) {
    res.status(400).send({error:e.message})
  }
    }
  }
  else {
    if (!person) {
      
  try {
    var cart = await Cart.create(req.body);
    cart.save();
    return res.status(200).send({cart,message:"cart has successfully created"})
  }
  catch (e) {
    res.status(400).send({error:e.message})
  }
    }
  }

};


exports.allCarts = async (req, res) => {

  try {
    Cart.find({user:req.params.id})
      .then(cart => {
        if (!cart) {
          return res.status(404).json({
            message: "cart are not longer in database"
          });
        }

        return res.status(200).json(cart);
      })
      .catch(err => {
        return res.status(404).json({
          error: err.message
        });
      });
  } catch (e) {
    return res.status(404).json({
      error: e.message
    });
  }
};