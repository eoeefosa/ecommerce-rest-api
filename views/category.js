const Category = require("../models/category");
const { customerror, customSuccess } = require("../commons/response");

const addcategory = async (req, res) => {
  const category = new Category({
    name: req.body.name,
    image_url: req.body.image_url,
  });

  try {
    const categoryToSave = await category.save();
    res.status(200).json(
      customSuccess({
        data: categoryToSave,
        message: "Category saved successfully",
      })
    );
  } catch (error) {
    res.status(400).json(customerror(error.message));
  }
};

const getcaterorybyid = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    res.send(category);
  } catch (error) {
    res.status(500).json(customerror(error.message));
  }
};

const updatecategorybyid = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        image_url: req.body.image_url,
      },
      {
        new: true,
      }
    );

    res.status(200).json(
      customSuccess({
        data: category,
        message: "Category updated successffully",
      })
    );
  } catch (error) {
    res.status(404).json(customerror(error.message));
  }
};
///
const getAllcategory = async (req, res) => {
  try {
    const allcategories = await Category.find();
    res.status(200).json(allcategories);
  } catch (error) {
    res.status(500).json(customerror(error.message));
  }
};

const deleteCategory = async (req, res) => {
  try {
    const deleteCategory = await Category.findByIdAndDelete(req.params.id);
    //    res.status(200).json(deleteCategory);
    res.send(customSuccess("Category deleted successffully"));
  } catch (error) {
    res.status(200).json(customerror(error.message));
  }
};

module.exports = {
  addcategory,
  getcaterorybyid,
  updatecategorybyid,
  getAllcategory,
  deleteCategory,
};
