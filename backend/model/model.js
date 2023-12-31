const mongoose = require("mongoose");

const remitoSchema = new mongoose.Schema({
  proveedor: {
    required: true,
    type: String,
  },
  fecha: {
    required: false,
    type: String,
  },
  remito: {
    required: true,
    type: String,
  },
  cantidad: {
    required: true,
    type: [Number],
  },
  descripcion: {
    required: true,
    type: [String],
  },
  facturado: {
    required: false,
    type: Boolean,
  },
  factura: {
    required: false,
    type: [String],
  },
  unidad: {
    required: false,
    type: String,
  },
});

const proveedorSchema = new mongoose.Schema({
  proveedor: {
    required: true,
    type: String,
  },
});

module.exports.Remito = mongoose.mongoose.model("Remito", remitoSchema);
module.exports.Proveedor = mongoose.mongoose.model("Proveedor",proveedorSchema);
