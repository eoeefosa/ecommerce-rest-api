const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  image_url: {
    required: false,
    type: String,
  },
});

module.exports = mongoose.model("Category", categorySchema);
