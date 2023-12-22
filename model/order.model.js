const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema({

    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "userdatas"
    },
    items : [{
        cartItem : {
            type :mongoose.Schema.Types.ObjectId,
            ref : "productdatas"
        },
        quantity : {
            type : Number,
            default :1
        }
    }],
    totalAmount : {
        type : Number
    },
    isDelete : {
        type : Boolean,
        default : false

    }
})

module.exports = mongoose.model('orderdata',orderSchema);