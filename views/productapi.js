"use strict";
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const multer = require("multer");

const Product = require("../models/product");
const { customerror, customSuccess } = require("../commons/response");
const Category = require("../models/category");

const FILE_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
};
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log(file.mimetype);
    const isvalid = FILE_TYPE_MAP[file.mimetype];
    let uploadError = new Error("invalid Image Type");
    if (isvalid) {
      uploadError = null;
    }
    cb(uploadError, "public/uploads");
  },
  filename: function (req, file, cb) {
    const fileName = file.originalname.split(" ").join("-");
    const extension = FILE_TYPE_MAP[file.mimetype];
    //  null because of no error
    cb(null, `${fileName}-${Date.now()}.${extension}`);
  },
});

const upload = multer({ storage: storage });

const getproductforcategory = async (req, res) => {
  let filter = {};
  if (req.query.category) {
    filter = { category: req.query.category.split(",") };
  }

  const productList = await Product.find(filter).populate("category");
  if (!productList) {
    res.status(500).json(customerror("no product found for this category"));
  }
  // TODO SEE HOW TO USE .json(customsuccess)
  res.status(200).send(productList);
};

const getproductbyid = async (req, res) => {
  const product = await Product.findById(req.params.id).populate("category");
  if (!product) {
    res
      .status(500)
      .json(customerror("The product with the given ID not exists"));
  }
  res.status(200).send(product);
};

const postProduct = async (req, res) => {
  if (!mongoose.isvalidObjectId) {
    res.status(400).json(customerror("Invalid Product ID"));
  }

  const category = await Category.findById(req.body.category);
  if (!category) {
    return res.status(400).json(customerror("Invalid category"));
  }
  const file = req.file;
  if (!file)
    return res.status(400).json(customerror("No image in the request"));
  const fileName = file.filename;
  const basePath = `${req.protocol}://${req.get("host")}/public/upload/`;

  let product = new Product({
    name: req.body.name,
    description: req.body.description,
    richDescription: req.body.richDescription,
    image: `${basePath}${fileName}`,
    brand: req.body.brand,
    price: req.body.price,
    discount: req.body.discount,
    category: req.body.category,
    countInStock: req.body.countInStock,
    rating: req.body.rating,
    numReviews: req.body.numReviews,
    isFeatured: req.body.isFeatured,
  });
};

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
