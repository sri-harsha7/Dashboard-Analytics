const Tables = require("../models/TableModel");

const getTable = async (req, res) => {
  try {
    const tables = await Tables.find();
    res.status(200).json(tables);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addTable = async (req, res) => {
  try {
    const table = new Tables(req.body);
    await table.save();
    res.json(table);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getTable, addTable };
