const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        unique: true,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Gender: {
        type : String,
        enum: ['Male', 'Female']
        
    }
})

module.exports = mongoose.model('UserData', UserSchema)