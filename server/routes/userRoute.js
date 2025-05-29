const express = require("express");
const router = express.Router();
const { user, addUser } = require("../controllers/userController");

router.post("/register", addUser);
router.get("/", user);

module.exports = router;
