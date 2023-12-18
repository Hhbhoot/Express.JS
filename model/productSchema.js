const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true

    },
    
    discription: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },
    brand: {
        type: String,
        required: true
    },

    category: {
        type: [String],
        required: true
    },
    isDelete: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('ProductData', productSchema);