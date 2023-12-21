const { default: mongoose } = require("mongoose");
const Cart = require("../model/cart.model");

exports.addToCart = async (req, res) => {
    try {
        const { cartItem, quantity } = req.body;

        let isCart = await Cart.findOne({ cartItem: cartItem, user: req.user._id });

        if (isCart) {
            res.json({ mesage: "CartItem already exists.." });
        }
        isCart = await Cart.create({
            user: req.user._id,
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
        let cartItem = await Cart.find({ user: req.user._id }, { isDelete: false });
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
        const { qauntity } = req.body;
        let id = req.query.ProductId ;
        let cartItem = await Cart.findByIdAndUpdate({ cartItem :id })
        
         return res.json({message : "Cart Quantity Updated...",cartItem});
    } catch (err) {
        console.log(err);
        res.json({ message: "Internal server Error.." });
    }
}