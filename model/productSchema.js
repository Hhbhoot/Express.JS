const mongoose = require('mongoose') ;

const productSchema = new mongoose.Schema({

    title : { type : String },
    discription : String,
    price : Number ,
    brand : String,
    category : [String]
});

module.exports = mongoose.model('products',productSchema);