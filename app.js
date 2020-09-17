const express = require("express");
const app = express();
const dbConnect = require("./database/connection.js");
const exampleRoute = require("./routes/example.js");

dbConnect.connection();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use("/example", exampleRoute);

module.exports = app;
