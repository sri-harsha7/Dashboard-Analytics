import React from "react";
import styles from "./Card.module.css";

const Card = ({ icon, value, content }) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.content}>
        <h2>{value}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;
