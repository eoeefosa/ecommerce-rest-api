"use strict";
const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");

const multer = require("multer");
const Product = require("../models/product");
const Category = require("../models/category");

const upload = multer({ dest: "./uploads" });
const { customerror, customSuccess } = require("../src/utils/errorresponse");

router.post(
  "/productupload",
  upload.single("productImage"),
  async (req, res) => {
    console.log(req.file);
    const product = new Product({
      name: req.body.name,
      description: req.body.description,
    });

    try {
      const productsave = await product.save();
      res.status(200).json(productsave);
    } catch (error) {
      res.status(400).json(customerror(error.message));
    }
  }
);

module.exports = router;
