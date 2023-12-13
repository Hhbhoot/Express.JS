const express = require("express");
const customerRoutes = express.Router();

const {
  getAllCustomer,
  getSpecificCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} = require("../Controller/customer.controller");

customerRoutes
  .get("/", getAllCustomer)
  .get("/:id", getSpecificCustomer)
  .post("/", createCustomer)
  .put("/:id", updateCustomer)
  .delete("/:id", deleteCustomer);

module.exports = customerRoutes