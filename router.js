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

rutas.get("/edit/:id", (req, res) => {
  const id = req.params.id;
  conexion.query("select * from users where id = ?", [id], (error, result) => {
    if (error) {
      console.error(error);
    } else {
      res.render("edit", { user: result[0] });
    }
  });
});

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
rutas.post("/update", crud.update);

module.exports = rutas;
