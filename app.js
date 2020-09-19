const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dbConnect = require("./database/connection.js");
const jokeRoute = require("./routes/joke.js");

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

app.use(bodyParser.json());

app.use("/jokes", jokeRoute);

module.exports = app;
