const mongoose = require("mongoose");

const saladSchema = new mongoose.Schema({
  id: Number,
  image: String,
  name: String,
  price: Number,
  taxes: Number,
  deliveryfee: Number,
  deliverytime: Number,
});

module.exports = mongoose.model("SaladMenu", saladSchema, "saladMenu");
