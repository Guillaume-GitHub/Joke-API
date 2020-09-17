const mongoose = require("mongoose");
const Example = require("../models/example.js");

exports.create = (req, res, next) => {
  // add POST method logic
  res.sendStatus(201);
};

exports.getOne = (req, res, next) => {
  // add GET method logic
  res.sendStatus(200);
};

exports.getAll = (req, res, next) => {
  // add GET method logic
  res.sendStatus(200);
};

exports.delete = (req, res, next) => {
  // add DELETE method logic
  res.sendStatus(204);
};

exports.put = (req, res, next) => {
  // add PUT method logic
  res.sendStatus(204);
};
