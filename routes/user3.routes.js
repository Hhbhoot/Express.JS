const express = require('express');
const User = require('../model/user3.model');
const { register, addUser } = require('../Controller/user3.controller');
const user3Routes = express.Router();

user3Routes.get('/register',register);
user3Routes.post('/add-user',addUser) 

module.exports = user3Routes ;
