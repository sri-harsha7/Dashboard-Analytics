const express = require("express");
const router = express.Router();
const {
  pizzaMenu,
  burgerMenu,
  saladMenu,
  friesMenu,
  drinksMenu,
} = require("../controllers/menuController");

router.get("/pizzamenu", pizzaMenu);
router.get("/burgermenu", burgerMenu);
router.get("/saladmenu", saladMenu);
router.get("/friesmenu", friesMenu);
router.get("/drinksmenu", drinksMenu);

module.exports = router;
