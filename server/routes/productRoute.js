//import express from "express";
//import Product from "../models/productModel";
const express = require("express");
const Product = require("../models/productModel");

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});
router.get("/:id", async (req, res) => {
  const product = await Product.findOne({ _id: req.params.id });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found." });
  }
});

module.exports = router;
//export default router;
