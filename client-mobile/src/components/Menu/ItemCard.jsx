import React from "react";
import styles from "./ItemCard.module.css";

const ItemCard = ({ Items }) => {
  return (
    <div className={styles.itemCard}>
      {Object.values(Items).map((item) => (
        <div key={item.id} className={styles.item}>
          <div className={styles.itemImage}>
            <img src={item.image} alt={item.name} />
          </div>

          <div className={styles.itemDetails}>
            <div className={styles.itemNamePrice}>
              <div className={styles.itemName}>
                <h2>{item.name}</h2>
              </div>
              <div className={styles.itemPrice}>
                <p>{item.price}</p>
              </div>
            </div>
            <div className={styles.addToCart}>+</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCard;
