const express = require('express');
const UserRoutes = express.Router();
const { verifyToken } = require('../helpers/tokenverify');
//  const mongoose = require('mongoose');

const {
    Login,
    signUp,
    getUser,
    updateUser
} = require('../Controller/User2.controller');


UserRoutes.post('/signUp', signUp)
         .post('/login', Login)
           .get('/getUser', verifyToken, getUser)
           .put('/updateUser', verifyToken, updateUser)

module.exports = UserRoutes;
