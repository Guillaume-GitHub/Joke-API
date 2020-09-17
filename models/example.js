const mongoose = require("mongoose");

const exampleSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
});

module.exports = mongoose.model("Example", exampleSchema);
