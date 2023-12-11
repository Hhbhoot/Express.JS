const express = require('express');
const productsRoutes = express.Router();

const {
    getAllProduct,
    getSpecificProduct,
    addProduct,
    replaceProduct,
    updateProduct,
    deleteProduct
} = require('../Controller/product.controller')



productsRoutes.get('/',getAllProduct);
productsRoutes.get('/:id',getSpecificProduct);
productsRoutes.post('/',addProduct);
productsRoutes.put('/:id',replaceProduct);
productsRoutes.patch('/:id',updateProduct);
productsRoutes.delete('/:id',deleteProduct);

module.exports = productsRoutes;