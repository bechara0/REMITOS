const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Model = require("../model/model");
const { SchemaTypeOptions } = require("mongoose");

// envio dato PROVeEDOR
router.post("/post/proveedor", async (req, res) => {
  const data = new Model({
    proveedor: req.body.proveedor,
  });
  console.log("Datos post proveedor: ", req.body);
  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// get proveedor
router.get("/getProveedores", async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// eliminar proveedor por id
router.delete("/deleteProveedor/:id", async (req, res) => {
  try {
    const id = req.params.id.trim();
    const data = await Model.findByIdAndDelete(id);
    res.send(`registro de ${data.proveedor} se ha eliminado`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
