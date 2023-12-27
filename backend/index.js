require("dotenv").config();

const express = require("express");

const app = express();

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("¡Hola, mundo de mierda!");
});

app.listen(port, () => {
  console.log(
    `Servidor Backend RemitosACDF encendido escuchando en puerto ${port}`
  );
});
