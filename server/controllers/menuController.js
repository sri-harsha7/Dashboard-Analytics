// controllers/menuController.js
const PizzaMenu = require("../models/PizzaMenu");
const BurgerMenu = require("../models/BurgerMenu");
const FriesMenu = require("../models/FriesMenu");
const DrinkMenu = require("../models/DrinksMenu");
const SaladMenu = require("../models/SaladMenu");

const pizzaMenu = async (req, res) => {
  try {
    const pizzas = await PizzaMenu.find();
    res.status(200).json(pizzas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const burgerMenu = async (req, res) => {
  try {
    const burgers = await BurgerMenu.find();
    res.status(200).json(burgers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const friesMenu = async (req, res) => {
  try {
    const fries = await FriesMenu.find();
    res.status(200).json(fries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const drinksMenu = async (req, res) => {
  try {
    const drinks = await DrinkMenu.find();
    res.status(200).json(drinks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const saladMenu = async (req, res) => {
  try {
    const salads = await SaladMenu.find();
    res.status(200).json(salads);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  pizzaMenu,
  burgerMenu,
  friesMenu,
  drinksMenu,
  saladMenu,
};
