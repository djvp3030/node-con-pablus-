const express = require("express");
const rutas = express.Router();

const conexion = require("./db/conexion");

rutas.get("/formulario", (req, res) => {
  conexion.query("select * from users", (error, result) => {
    if (error) {
      console.error(error);
    } else {
      res.send(result);
    }
  });
});

// rutas.get("/", (req, res) => {
//   res.render("principal");
// });

rutas.get("/", (req, res) => {
  res.render("añadir");
});

rutas.get("/resultados", (req, res) => {
  conexion.query("select * from users", (error, result) => {
    if (error) {
      console.error(error);
    } else {
      res.render("resultado", { result: result });
    }
  });
});

const crud = require("./controllers/crud");
rutas.post("/save", crud.save);
module.exports = rutas;
