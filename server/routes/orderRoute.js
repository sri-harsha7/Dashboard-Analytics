const express = require("express");
const router = express.Router();
const {
  order,
  addOrder,
  getOrderById,
} = require("../controllers/orderController");

router.post("/", addOrder);
router.get("/", order);
router.get("/:id", getOrderById);

module.exports = router;
