const express = require('express');
const UserRoutes = express.Router();
// const mongoose = require('mongoose');

const{ 
    Login,
    signUp
} = require('../Controller/User2.controller') ;


UserRoutes.post('/signUp',signUp);
UserRoutes.post('/login',Login);

module.exports = UserRoutes;
