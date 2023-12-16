"use strict";

const express = require("express");
const router = express.Router();
const {
  addcategory,
  getcaterorybyid,
  updatecategorybyid,
  getAllcategory,
  deleteCategory,
} = require("../views/category");
// const getAllcategory= require("../src/Category/views/addcategory");

router.post("/addcategory", addcategory);
router.get("/getcategory/:id", getcaterorybyid);
router.put("/updatecategory/:id", updatecategorybyid);
router.delete("/deletecategory/:id", deleteCategory);
router.get("/getcategory", getAllcategory);

module.exports = router;
