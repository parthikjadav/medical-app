const mongoose = require('mongoose');

const registerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
});

const register = mongoose.model("registerSchema", registerSchema);

module.exports = register;
