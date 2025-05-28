import React from "react";
import styles from "./MenuIcon.module.css";
import PizzaMenu from "./PizzaMenu";
import BurgerMenu from "./BurgerMenu";
import { PiHamburger } from "react-icons/pi";
import { GiFullPizza } from "react-icons/gi";
import { RiDrinks2Line } from "react-icons/ri";
import { GiFrenchFries } from "react-icons/gi";
import { LuSalad } from "react-icons/lu";
import DrinksMenu from "./DrinksMenu";
import FriesMenu from "./FriesMenu";
import SaladMenu from "./SaladMenu";
const MenuIcon = () => {
  const [menu, setMenu] = React.useState("burger");
  const renderMenu = () => {
    switch (menu) {
      case "burger":
        return <BurgerMenu />;
      case "pizza":
        return <PizzaMenu />;
      case "drinks":
        return <DrinksMenu />;
      case "fries":
        return <FriesMenu />;
      case "salad":
        return <SaladMenu />;
      default:
        return <BurgerMenu />;
    }
  };
  return (
    <div>
      <div className={styles.menuIcons}>
        <div
          className={`${styles.menuIcon} ${
            menu === "burger" ? styles.active : ""
          }`}
          onClick={() => setMenu("burger")}
        >
          <div style={{ fontSize: "40px", paddingTop: "10px" }}>
            <PiHamburger />
          </div>
          <p>Burger</p>
        </div>
        <div
          className={`${styles.menuIcon} ${
            menu === "pizza" ? styles.active : ""
          }`}
          onClick={() => setMenu("pizza")}
        >
          <div style={{ fontSize: "40px", paddingTop: "10px" }}>
            <GiFullPizza />
          </div>
          <p>Pizza</p>
        </div>
        <div
          className={`${styles.menuIcon} ${
            menu === "drinks" ? styles.active : ""
          }`}
          onClick={() => setMenu("drinks")}
        >
          <div style={{ fontSize: "40px", paddingTop: "10px" }}>
            <RiDrinks2Line />
          </div>
          <p>Drinks</p>
        </div>
        <div
          className={`${styles.menuIcon} ${
            menu === "fries" ? styles.active : ""
          }`}
          onClick={() => setMenu("fries")}
        >
          <div style={{ fontSize: "40px", paddingTop: "10px" }}>
            <GiFrenchFries />
          </div>
          <p>Fries</p>
        </div>
        <div className={styles.menuIcon} onClick={() => setMenu("salad")}>
          <div style={{ fontSize: "40px", paddingTop: "10px" }}>
            <LuSalad />
          </div>
          <p>Salad</p>
        </div>
      </div>

      {renderMenu()}
    </div>
  );
};

export default MenuIcon;
