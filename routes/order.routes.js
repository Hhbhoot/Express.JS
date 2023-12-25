const express = require('express');
const orderRoutes = express.Router();
const {addToOrder, getAllorder, updateOrder, deleteOrder} = require('../Controller/order.controller');
const { verifyToken } = require('../helpers/tokenverify');

orderRoutes.post('/addtoorder',verifyToken,addToOrder);
orderRoutes.get('/getallorder',verifyToken,getAllorder);
orderRoutes.put('/updateorder',verifyToken,updateOrder);
orderRoutes.put('/deleteorder',verifyToken,deleteOrder);

module.exports = orderRoutes ;
