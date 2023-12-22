const express = require('express');

const  cartRoutes = express.Router();

const{ addToCart, getAllCarts,getCart, updateCart, deleteCart } = require('../Controller/cart.controller');
const { verifyToken } = require('../helpers/tokenverify');

cartRoutes.post('/addtocart',verifyToken,addToCart)
cartRoutes.get('/getAllCart',verifyToken,getAllCarts)
cartRoutes.get('/getCart',verifyToken,getCart)
cartRoutes.put('/updatecart',verifyToken,updateCart)
cartRoutes.put('/deletecart',verifyToken,deleteCart)

module.exports = cartRoutes ;
