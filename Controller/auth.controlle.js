const mongoose = require('mongoose');
const Auth = require('../model/auth.model');

exports.uploadImage = async (req ,res) =>{           // For single image upload
    if(req.file){
        req.body.profileimage = `${req.file.path}`
    }

    let newAuth = await Auth.create({
        ...req.body

    })
    newAuth.save();

    res.json({Auth : newAuth})
};

exports.uploadMany = async (req, res) =>{
    if(req.files){
        for(let i = 0 ; i < req.files.length ; i++){
        req.body.profileimage = `${req.files.path}`
        

    }


    let newAuth = await Auth.create({
        ...req.body
    })
    newAuth.save();
      res.json({ Auth : newAuth})

 }
}
