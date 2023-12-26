const mongoose = require('mongoose');
const Auth = require('../model/auth.model');

exports.uploadImage = async (req, res) => {           // For single image upload
    if (req.file) {
        req.body.profileimage = `${req.file.path.replace(/\\/g , '/')}`
    }

    let newAuth = await Auth.create({
        ...req.body

    })
    newAuth.save();

    res.json({ Auth: newAuth })
};

exports.uploadMany = async (req, res) => {
    console.log(req.files);
    let images = []
    if (req.files) {
        for (let i = 0; i < req.files.length; i++) {
            images[i] = `${req.files[i].path.replace(/\\/g, '/')}`
        }

        console.log(images);

        let newAuth = await Auth.create({
            ...req.body,
            profileimage: images
        })
        newAuth.save();
        res.json({ Auth: newAuth })


    }
}
