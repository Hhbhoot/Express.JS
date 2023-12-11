const express = require('express');
const userRoutes = express.Router();

const {
    getAllUser,
    getSpecificUser,
    addUser,
    replaceUser,
    updateUser,
    deleteUser
} = require('../Controller/user.controller')



userRoutes.get('/',getAllUser);
userRoutes.get('/:id',getSpecificUser);
userRoutes.post('/',addUser);
userRoutes.put('/:id',replaceUser);
userRoutes.patch('/:id',updateUser);
userRoutes.delete('/:id',deleteUser);

module.exports = userRoutes;