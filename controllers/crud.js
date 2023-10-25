const conexion = require("../db/conexion");

exports.save = (req, res) => {
  const nombre = req.body.nombre;
  const apellido = req.body.apellido;
  const cedula = req.body.cedula;
  const rol = req.body.rol;
  conexion.query(
    "insert into users SET?",
    {
      nombre: nombre,
      apellido: apellido,
      cedula: cedula,
      rol: rol,
    },
    (err, result) => {
      if (err) {
        console.error(err);
      } else {
        res.redirect("/");
      }
    }
  );
};
