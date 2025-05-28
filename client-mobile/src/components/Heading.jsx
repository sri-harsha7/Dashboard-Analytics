import React from "react";
import styles from "./Heading.module.css";
import Search from "./Search";

const Heading = () => {
  return (
    <div className={styles.heading}>
      <p className={styles.h1}>Good Evening</p>
      <p className={styles.h2}> Place your order here</p>
      <div>
        <Search></Search>
      </div>
    </div>
  );
};

export default Heading;
