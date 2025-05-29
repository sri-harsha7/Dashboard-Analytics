import React from "react";
import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Heading from "./components/Heading";
import PizzaMenu from "./components/Menu/PizzaMenu";
import BurgerMenu from "./components/Menu/BurgerMenu";
import DrinksMenu from "./components/Menu/DrinksMenu";
import FriesMenu from "./components/Menu/FriesMenu";
import SaladMenu from "./components/Menu/SaladMenu";
import MenuIcon from "./components/Menu/MenuIcon";
import Welcome from "./components/Welcome";
import Checkout from "./pages/Checkout";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className={styles.app}>
      <Router>
        <Heading></Heading>
        <Routes>
          <Route path="/" element={<Welcome></Welcome>} />
          <Route path="/menu" element={<MenuIcon />}>
            <Route index element={<BurgerMenu />} />
            <Route path="burger" element={<BurgerMenu />} />
            <Route path="pizza" element={<PizzaMenu />} />
            <Route path="drinks" element={<DrinksMenu />} />
            <Route path="fries" element={<FriesMenu />} />
            <Route path="salad" element={<SaladMenu />} />
          </Route>
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Toaster></Toaster>
      </Router>
    </div>
  );
};

export default App;
