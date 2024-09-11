const express = require("express");
const mysql = require("mysql");
const port = 5000;

const app = express();

app.listen(port, () => {
  console.log("serveur est en ligne");
});
