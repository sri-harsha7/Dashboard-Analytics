const express = require("express");
const router = express.Router();
const {
  getAnalytics,
  getRevenueData,
} = require("../controllers/analyticsController");
router.get("/", getAnalytics);
router.get("/revenue", getRevenueData);

module.exports = router;
