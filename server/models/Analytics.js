const mongoose = require("mongoose");
const Order = require("./Order");

const analyticsSchema = new mongoose.Schema({
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
    required: true,
  },

  totalRevenue: { type: Number },
  numberOfOrders: { type: Number },
  numberOfClients: { type: Number },
});

module.exports = mongoose.model("Analytics", analyticsSchema);
