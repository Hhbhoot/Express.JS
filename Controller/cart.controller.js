const mongoose = require('mongoose')
const Cart = require("../model/cart.model");
const Product = require("../model/product.model");
exports.addToCart = async (req, res) => {
    try {
        const { cartItem, quantity } = req.body;

        let isCart = await Cart.findOne({ cartItem: cartItem, user: req.user._id });

        if (isCart) {
            res.json({ mesage: "CartItem already exists.." });
        }
        let isProduct = await Product.findById(cartItem);
        if(!isProduct){
            return res.json({message : "Product Not Found.."})
        }
        console.log(isProduct);

        isCart = await Cart.create({
            user : req.user._id,
            cartItem,
            quantity,
        });
        isCart.save();
        res
            .status(201)
            .json({ cart: isCart, message: "Added into cart Successfully.." });
    } catch (err) {
        console.log(err);
        res.json({ message: "Internal server Error.." });
    }
};
exports.getAllCarts = async (req, res) => {
    try {
         let cartItem = await Cart.find({ user: req.user._id , isDelete: false }); //.populate('cartItem');
        return res.status(200).json(cartItem)

    } catch (err) {
        console.log(err);
        res.json({ message: "Internal server Error.." });
    }
}

exports.getCart = async (req, res) => {
    try {
        let id = new mongoose.Types.ObjectId(req.query.cartId); //to convert id
        let cartItem = await Cart.findById(id);
        if (!cartItem) {
            return res.json({ message: "Cart not found." })
        }
        return res.json(cartItem);
    }
    catch (err) {
        console.log(err);
        res.json({ message: "Internal server Error.." });
    }
}

exports.updateCart = async (req, res) => {
    try {
      let { quantity } = req.body;
      let cartId = new mongoose.Types.ObjectId(req.query.cartId);
      let cart = await Cart.findByIdAndUpdate(
        cartId,
        { $set: { quantity: quantity } },
        { isDelete: false }
      );
      if (!cart) {
        return res.json({ message: "Cart not Found..." });
      }
      return res.json({ message: "Cart updated Successfully..", cart });
    } catch (err) {
      console.log(err);
      res.json({ message: "Internal server Error.." });
    }
  };
  
  exports.deleteCart = async (req, res) => {
    try {
      let cartId = new mongoose.Types.ObjectId(req.query.id);
      console.log(cartId);
      let cart = await Cart.findByIdAndUpdate(cartId, {
        $set: { isDelete: true },
      });
      console.log(cart);
  
      return res.json({ message: "Cart Deleted Successfully..", cart });
    } catch (err) {
      console.log(err);
      res.json({ message: "Internal server Error.." });
    }
  };
  