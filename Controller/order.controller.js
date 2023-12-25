const Order = require('../model/order.model');
// const mongoose = require('mongoose')
const Product = require('../model/product.model');
const Cart = require('../model/cart.model');
const orderRoutes = require('../routes/order.routes');
const { default: mongoose } = require('mongoose');

exports.addToOrder = async (req, res) => {
    try {
        let cartItems = await Cart.find({ user: req.user._id, isDelete: false }).populate('cartItem')
        // console.log(cartItems);

       let orderItem = cartItems.map((item)=>({

         cartItem : item.cartItem._id,
         quantity : item.quantity,
         price : item.cartItem.price

       }))

       let totalPrice = orderItem.reduce((total,val)=>{
          return total += (val.quantity * val.price)
       },0); 

    //    let totalPrice = 0 
    //    for(let i = 0 ; i < orderItem.length;i++){
    //     totalPrice += (orderItem[i].price * orderItem[i].quantity) 
    //    }
    //    console.log(sum);

       let newOrder = await Order.create({
        user : req.user._id,
        items : orderItem,
        totalAmount : totalPrice
       })
       newOrder.save();
       
         await Cart.updateMany({user: req.user._id}, {isDelete: true});
         res.json({newOrder,message:"Added to Order Successfully"})  ;
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Interal Server Error" });
    }
}

// let orderItem = await Cart.aggregate([  // aggregation pipeline if not want to use populate
    //     {
    //         $match: { user: req.user._id, isDelete: false }
    //     },
    //     {
    //         $lookup:
    //         {
    //             from: 'ProductData',
    //             localField: 'cartItem',
    //             foreignField: _id,
    //             as: porduct_details
    //         }
    //     },
    //     {
    //         $unwind: "$porduct_details"
    //     }
    // ])

    exports.getAllorder = async(req,res)=>{
        try {
               let order = await Order.find({user : req.user._id , isDelete : false});
               if(!order){
                    return res.json({ message : "you Have not Order anything Yet..."})
               }           
               return res.status(200).json(order);
  
 
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: "Interal Server Error" });
        }
    }

    exports.updateOrder = async (req,res)=>{
        try {
            let order = await Order.find({user : req.user._id , isDelete : false})

            console.log(order)

            let { id , quantity } = req.body ;
            id = new mongoose.Types.ObjectId(id);

            let cart = await Cart.findById(id) // , {$set : { 'items.cartItem.quantity' : quantity}})

            console.log(cart);

            
        } catch (error) {
            
        }
    }
        
    exports.deleteOrder = async (req,res)=>{
        try {
               let id = new mongoose.Types.ObjectId(req.query.id);
               let order = await Order.findByIdAndUpdate(id,{isDelete : true});

                res.status(200).json({ message : "Order Deleted Successfully..", OrderData :order});

        } catch (err) {
            console.log(err);
            res.status(500).json({ message: "Interal Server Error" });
        }
    }