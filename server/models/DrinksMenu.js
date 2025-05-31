const mongoose = require("mongoose");

const drinkSchema = new mongoose.Schema({
  id: Number,
  image: String,
  name: String,
  price: Number,
  taxes: Number,
  deliveryfee: Number,
  deliverytime: Number,
});

module.exports = mongoose.model("DrinkMenu", drinkSchema, "drinkMenu");
