const mongoose = require('mongoose');
const Auth = require('../model/auth.model');

exports.uploadImage = async (req ,res) =>{
    if(req.file){
        req.body.profileimage = `${req.file.path}`
    }

    let newAuth = await Auth.create({
        ...req.body
    })
    newAuth.save();

    res.json({Auth : newAuth})
};
