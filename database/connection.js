const mongoose = require("mongoose");
const fs = require("fs");

exports.connection = connection;

function connection() {
  try {
    const data = fs.readFileSync("./config.json");
    const config = JSON.parse(data.toString());

    mongoose
      .connect(
        `mongodb+srv://${config.mongodb.user}:${config.mongodb.password}@cluster0.4xpvn.mongodb.net/${config.mongodb.dbName}?retryWrites=true&w=majority`,
        { useNewUrlParser: true, useUnifiedTopology: true }
      )
      .then(() => console.log("Connection mongodb successful !"))
      .catch(() => console.log("Connection mongodb failed !"));
  } catch (e) {
    console.log(e);
    return;
  }
}
