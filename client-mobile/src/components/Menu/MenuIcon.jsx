import React from "react";
import styles from "./MenuIcon.module.css";
import { useNavigate, Outlet } from "react-router-dom";
import { PiHamburger } from "react-icons/pi";
import { GiFullPizza } from "react-icons/gi";
import { RiDrinks2Line } from "react-icons/ri";
import { GiFrenchFries } from "react-icons/gi";
import { LuSalad } from "react-icons/lu";

const MenuIcon = () => {
  const [menu, setMenu] = React.useState("burger");

  const navigate = useNavigate();

  return (
    <div>
      <div className={styles.menuIcons}>
        <div
          className={`${styles.menuIcon} ${
            menu === "burger" ? styles.active : ""
          }`}
          onClick={() => {
            navigate("/menu/burger"), setMenu("burger");
          }}
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
          onClick={() => {
            navigate("/menu/pizza"), setMenu("pizza");
          }}
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
          onClick={() => {
            navigate("/menu/drinks"), setMenu("drinks");
          }}
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
          onClick={() => {
            navigate("/menu/fries"), setMenu("fries");
          }}
        >
          <div style={{ fontSize: "40px", paddingTop: "10px" }}>
            <GiFrenchFries />
          </div>
          <p>Fries</p>
        </div>
        <div
          className={styles.menuIcon}
          onClick={() => {
            navigate("/menu/salad"), setMenu("salad");
          }}
        >
          <div style={{ fontSize: "40px", paddingTop: "10px" }}>
            <LuSalad />
          </div>
          <p>Salad</p>
        </div>
      </div>
      <div className={styles.menu}>
        <Outlet />
      </div>

      <div className={styles.next}>
        <button onClick={() => navigate("/checkout")}>Next</button>
      </div>
    </div>
  );
};

export default MenuIcon;
