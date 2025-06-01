const express = require("express");

const router = express.Router();

const { getTable, addTable } = require("../controllers/tableController");

router.get("/", getTable);

router.post("/", addTable);

module.exports = router;
