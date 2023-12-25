const mongoose = require('mongoose');
const verifyToken = require('../helpers/tokenverify');
const userSchema = mongoose.Schema({

    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type : String,
        enum: ['Male', 'Female']
        
    }
})

module.exports = mongoose.model('user', userSchema)