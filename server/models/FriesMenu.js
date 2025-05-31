const mongoose = require("mongoose");

const friesSchema = new mongoose.Schema({
  id: Number,
  image: String,
  name: String,
  price: Number,
  taxes: Number,
  deliveryfee: Number,
  deliverytime: Number,
});

module.exports = mongoose.model("FriesMenu", friesSchema, "friesMenu");
