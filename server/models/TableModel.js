const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema({
  id: Number,
  chairs: Number,
  status: String,
});

module.exports = mongoose.model("Table", tableSchema, "tables");
