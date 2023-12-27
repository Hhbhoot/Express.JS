const mongoose = require('mongoose');

const User3Schema = new mongoose.Schema({
    firstname : {
        type : String
    },
    lastname : {
        type : String
    },
    email : {
        type : String
    }
});

module.exports = mongoose.model('user3',User3Schema)