const Order = require('../model/order.model');
// const mongoose = require('mongoose')

const Cart = require('../model/cart.model');

exports.addToOrder = async (req, res) => {
    try {
        let cartItems = await Cart.find({ user: req.user._id, isDelete: false });
        // console.log(cartItems);

        let orderItem = await Cart.aggregate([
            {
                $match: { user: req.user._id, isDelete: false }
            },
            {
                $lookup:
                {
                    from: 'ProductData',
                    localField: 'cartItem',
                    foreignField: _id,
                    as: porduct_details
                }
            },
            {
                $unwind: "$porduct_details"
            }
        ])

        // let orderItem = cartItems.map((item) => ({
        //     cartItem: item.cartItem._id,
        //     quantity: item.quantity,
        //     price: item.cartItem.price
        // }))
          console.log(orderItem);

        // let totalPrice = orderItem.reduce(((total, item) => total += (item.quntity * item.price)),0);
        //  console.log(totalPrice);

        //  let newOrder = await orderModel.create({
        //      user : req.user._id ,
        //     items : orderItem,
        //      totalAmount : totalPrice
        //  })
        // newOrder.save();
        //  await Cart.updateMany({user: req.user._id}, {isDelete: true});
        //  res.json({newOrder,message:"Added to Order Successfully"})  ;
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Interal Server Error" });
    }
}

