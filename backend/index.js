require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;
const routes = require("./routes/routes");
const cors = require("cors");

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});
database.once("connected", () => {
  console.log("Database Connected");
});

const app = express();

const port = process.env.PORT;

app.use(cors());

app.use(express.json());

app.use("/api", routes);

app.listen(port, () => {
  console.log(
    `Servidor Backend RemitosACDF encendido escuchando en puerto ${port}`
  );
});
