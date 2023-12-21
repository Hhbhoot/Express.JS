const express = require('express');

const  cartRoutes = express.Router();

const{ addToCart, getAllCarts,getCart, updateCart } = require('../Controller/cart.controller');
const { verifyToken } = require('../helpers/tokenverify');

cartRoutes.post('/addtocart',verifyToken,addToCart)
cartRoutes.get('/getAllCart',verifyToken,getAllCarts)
cartRoutes.get('/getCart',verifyToken,getCart)
cartRoutes.put('/updateCart',verifyToken,updateCart)

module.exports = cartRoutes ;
