const mongoose = require('mongoose');


const orderSchema = mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "userdata"
    },
    items : [{
        cartItem : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "productdata"
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