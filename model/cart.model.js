const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userdatas'
    },
    cartItem: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'productdatas'
    },
    quantity: {
        type: Number,
        default: 1
    },
    isDelete: {
        type: Boolean,
         default: false
    }
})

module.exports = mongoose.model('cartdata', cartSchema);
