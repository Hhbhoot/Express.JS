const mongoose = require("mongoose");
const Auth = require("../model/auth.model");

exports.uploadImage = async (req, res) => {
  // For single image upload
  if (req.file) {
    req.body.profileimage = `${req.file.path.replace(/\\/g, "/")}`;
  }

  let newAuth = await Auth.create({
    ...req.body,
  });
  newAuth.save();

  res.json({ Auth: newAuth });
};

exports.uploadManyImage = async (req, res) => {
  console.log(req.files);
  let images = [];
  if (req.files) {
    for (let i = 0; i < req.files.length; i++) {
      images[i] = `${req.files[i].path.replace(/\\/g, "/")}`;
    }

    console.log(images);

    let newAuth = await Auth.create({
      ...req.body,
      profileimage: images,
    });
    newAuth.save();
    res.json({ Auth: newAuth });
  }
};
exports.uploadFile = async (req, res) => {
  if (req.file) {
    req.body.profileimage = `${req.file.path.replace(/\\/g, "/")}`;
  }

  let newAuth = await Auth.create({
    ...req.body,
  });
  newAuth.save();
  res.json({ Auth: newAuth });
};

exports.uploadManyFile = async (req, res) => {
    
  let filePath = [];

  if (req.files) {
    for (let i = 0; i < req.files.length; i++) {
      filePath[i] = `${req.files[i].path.replace(/\\/g,'/')}`;
    }
    let newAuth = await Auth.create({
      ...req.body,
      profileimage: filePath,
    });
    newAuth.save();

    res.status(201).json(newAuth);
  }
};
