const Products = require("./../models/products");

exports.allProduct =async (req, res) => {
  try {
   await Products.find().sort({"created": -1})
      .then(products => {
        if (!products) {
          return res.status(404).json({
            message: "products are not longer in database"
          });
        }

        return res.status(200).json(products);
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


exports.postProduct = async (req, res) => {
  try {
    var product = await Products.create(req.body);
    product.photo = req.files;
    product.save();
    return res.status(200).send({product,message:"product has successfully created"})
  }
  catch (e) {
    res.status(400).send({error:e.message})
  }
};


exports.SingleProduct = async(req, res) => {
  const id = req.params.id;
  
  await Products.findById({_id:id})
    .then(products => {
      if (!products) {
        return res.status(404).json({
          message: "post is not existed"
        });
      }
      return res.status(200).json(products);
    })
    .catch(err => {
      res.status(400).json({
        error: err
      });
    });
};


exports.DeleteProduct = (req, res) => {
  const id = req.params.id;
  try {
    Products.findOneAndRemove({_id:id}, (err, product) => {
      
      if (err) {
        return res.status(500).json({
          success: false,
          message: "post is not deleted"
        });
      } else if (!product) {
        return res.status(400).json({
          success: false,
          message: "post is has already deleted"
        });
      }

      else {
        return res.status(200).json({
          success: true,
          // product:product,
          message: "product has deleted"
        });
      }
    });
  } catch (e) {
    return res
      .status(404)
      .send({ message: "product is not removed", error: e.message });
  }
};





exports.UpdateProduct = async (req, res) => {
  const id = req.params.id;
  const { title, body ,category} = req.body;
  
 
  const product = await Products.findOneAndUpdate(
    { _id: id },
    {
      title: title || undefined,
      body: body || undefined,
      category:category ||undefined,
      photo: req.files || undefined
    },
    { new: true },
    (err, product) => {
      if (err) {
        return res.status(404).send({ message: "product is not updated" });
      }
      return res
        .status(200)
        .send({ product, message: "product has successfully updated" });
    }
  );
};





//category cotroller




exports.search = async (req, res) => {
  const category = req.params.id;
  console.log(category);
  
  try {
 await   Products.find({category:category})
      .then(products => {
        if (!products) {
          return res.status(404).json({
            message: "products are not longer in database"
          });
        }
        return res.status(200).json(products);
      })
      .catch(err => {
        return res.status(404).json({
          error: err.message,
          message:"No result was found"
        });
      });
  } catch (e) {
    return res.status(404).json({
      error: e.message,
      message:"no result was found"
    });
  }
 
};
