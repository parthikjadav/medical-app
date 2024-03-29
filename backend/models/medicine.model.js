const mongoose = require("mongoose");

const medicineSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  expiry: {
    type: String,
    required: true,
  },
});

const medicine = mongoose.model("medicineSchema", medicineSchema);

module.exports = medicine;
