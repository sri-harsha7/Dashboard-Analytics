import React from "react";
import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}></div>
      <div className={styles.content}>
        <h3>Card Title</h3>
        <p>Card Content</p>
      </div>
    </div>
  );
};

export default Card;
