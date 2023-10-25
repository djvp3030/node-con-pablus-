const express = require("express");
const main = express();
main.set(`view engine`, "ejs");

main.use(express.urlencoded({ extended: false }));
main.use(express(express.json));

main.use("/", require("./router"));
main.listen(5000, () => {
  console.log("server en http://localhost:5000");
});
