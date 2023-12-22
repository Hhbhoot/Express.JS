const express = require('express');
const orderRoutes = express.Router();
const {addToOrder} = require('../Controller/order.controller');
const { verifyToken } = require('../helpers/tokenverify');

orderRoutes.post('/addtoorder',verifyToken,addToOrder);

module.exports = orderRoutes ;
