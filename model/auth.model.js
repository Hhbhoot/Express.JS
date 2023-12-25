const mongoose = require('mongoose');

const authSchema = new mongoose.Schema({

    firstname : {
        type : String,
        required : true
    },
    lastname : {
        type : String,
        required :  true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String
    },
    profileimage : {
        type : String
    },
    gender : {
           type : String,
           enum : ['male','female']
    },
    isDelete : {
        type : Boolean,
        default : false
    }
})

module.exports = mongoose.model('auth',authSchema);