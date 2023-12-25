const express = require('express');
const { uploadImage } = require('../Controller/auth.controlle')
const { upload } = require('../helpers/imageUpload')
const authRoutes = express.Router();

authRoutes.post('/image',upload.single('profileimage'),uploadImage)

module.exports = authRoutes ;