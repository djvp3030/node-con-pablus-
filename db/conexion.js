const db = require("mysql");

const conexion = db.createConnection({
  host: "localhost",
  user: "root",
  password: "3030",
  database: "node",
});

conexion.connect((error) => {
  if (error) {
    console.error("error:" + "" + error);
    return;
  } else {
    console.log("conexion realizada correctamente");
  }
});

module.exports = conexion;
