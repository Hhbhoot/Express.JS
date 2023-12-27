const express = require('express');
const { uploadImage,  uploadFile, uploadManyImage, uploadManyFile } = require('../Controller/auth.controlle')
const { upload } = require('../helpers/imageUpload')
const authRoutes = express.Router();

authRoutes.post('/image',upload.single('profileimage'),uploadImage);
 authRoutes.post('/images',upload.array('profileimage'),uploadManyImage);
 authRoutes.post('/file',upload.single('profileimage'),uploadFile)
 authRoutes.post('/files',upload.array('profileimage'),uploadManyFile)

module.exports = authRoutes ;