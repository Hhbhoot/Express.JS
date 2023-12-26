const express = require('express');
const { uploadImage, uploadMany } = require('../Controller/auth.controlle')
const { upload } = require('../helpers/imageUpload')
const authRoutes = express.Router();

authRoutes.post('/image',upload.single('profileimage'),uploadImage)
 authRoutes.post('/images',upload.array('profileimage'),uploadMany)

module.exports = authRoutes ;