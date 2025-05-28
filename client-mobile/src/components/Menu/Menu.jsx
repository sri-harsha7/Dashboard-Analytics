import React from "react";
import styles from "./Menu.module.css";
import MenuIcon from "./MenuIcon";

const Menu = () => {
  return (
    <div className={styles.menu}>
      <MenuIcon></MenuIcon>

      <div className={styles.next}>
        <button>Next</button>
      </div>
    </div>
  );
};
export default Menu;
