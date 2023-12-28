const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  proveedor: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.mongoose.model("Data", dataSchema);
