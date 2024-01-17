const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { Proveedor, Remito } = require("../model/model");
const { SchemaTypeOptions } = require("mongoose");

// envio dato PROVeEDOR
router.post("/post/proveedor", async (req, res) => {
  const data = new Proveedor({
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
    const data = await Proveedor.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// eliminar proveedor por id
router.delete("/deleteProveedor/:id", async (req, res) => {
  try {
    const id = req.params.id.trim();
    const data = await Proveedor.findByIdAndDelete(id);
    res.send(`registro de ${data.proveedor} se ha eliminado`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// borrar remito
router.delete("/deleteRemito/:id", async (req, res) => {
  try {
    const id = req.params.id.trim();
    const data = await Remito.findByIdAndDelete(id);
    res.send(`remito ${data.remito} se ha eliminado`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// post remitos
router.post("/post/remito", async (req, res) => {
  const data = new Remito({
    proveedor: req.body.proveedor,
    fecha: req.body.fecha,
    remito: req.body.remito,
    cantidad: req.body.cantidad,
    unidad: req.body.unidad,
    descripcion: req.body.descripcion,
    facturado: req.body.facturado,
    factura: req.body.factura,
  });
  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// get remitos
router.get("/getRemitos", async (req, res) => {
  try {
    const { proveedor, remito, _id } = req.query;
    let query = {};
    if (proveedor) {
      query.proveedor = proveedor;
    }
    if (remito) {
      query.remito = remito;
    }
    if (_id) {
      query._id = _id;
    }
    const data = await Remito.find(query);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
