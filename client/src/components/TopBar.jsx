import React from "react";
import styles from "./TopBar.module.css";
import { SlArrowDown } from "react-icons/sl";

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.searchContainer}>
        <div>
          <input type="text" placeholder="Filter..." />
        </div>
        <div className={styles.down}>
          <button>
            <SlArrowDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
