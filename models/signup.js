const mongoose = require("mongoose");

const signupschema = new mongoose.Schema({
  email: {
    require: true,
    type: String,
  },
  password: {
    require: true,
    type: String,
  },
  confirm_password: {
    require: true,
    type: String,
  },
  phone: {
    type: String,
  },
});

module.exports = mongoose.model("Signup", signupschema);
