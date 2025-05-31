const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema(
  {
    items: Array,
    orderType: String,
    name: String,
    mobile: Number,
    address: String,
    cookingInstructions: String,
    grandTotal: Number,
    createdAt: { type: Date },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
