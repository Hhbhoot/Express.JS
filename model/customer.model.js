const mongoose = require ('mongoose');

const customerSchema = new mongoose.Schema({

    Name  : { type : String} ,
    Discription : String ,
    Mobile : String ,
    Number : Number ,
    City : String ,
    isDelete : {
        type : Boolean,
        default : false
    
    } 
}) 

module.exports = mongoose.model('CustomerData' ,customerSchema )
