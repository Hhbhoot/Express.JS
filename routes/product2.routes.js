const express = require("express");
const ProductRoutes = express.Router();

const {
    createProduct,
    getAllProduct,
    getSpecificProduct,
    updateProduct,
    deleteProduct,
} = require("../Controller/product2.controller");

ProductRoutes
  .post("/", createProduct)
  .get("/:id", getAllProduct)
  .post("/", getSpecificProduct)
  .put("/:id", updateProduct)
  .delete("/:id", deleteProduct);

module.exports = ProductRoutes;