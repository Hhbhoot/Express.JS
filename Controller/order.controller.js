const Order = require('../model/order.model');
const mongoose = require('mongoose')

const Cart = require('../model/cart.model');

exports.addToOrder = async (req,res)=>{
    try {
          let cartItems = await Cart.find({user : req.user._id  , isDelete : false}).populate('cartItem');
          console.log(cartItems);

         
    } catch (err) {
        console.log(err);
        res.json({ message: "Internal Server Error.." });
    }
}