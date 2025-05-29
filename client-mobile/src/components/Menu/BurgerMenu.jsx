import React from "react";
import styles from "./BurgerMenu.module.css";
import ItemCard from "./ItemCard";

const BurgerMenu = () => {
  const Items = {
    item1: {
      id: 1,
      image:
        "https://b.zmtcdn.com/data/pictures/2/19082182/9f2f843523d0e8b9ecd9ee9ee32c1c46.jpg",
      name: "Chicken",
      price: 200,
      taxes: 5,
    },
    item2: {
      id: 2,
      image:
        "https://b.zmtcdn.com/data/pictures/2/19082182/9f2f843523d0e8b9ecd9ee9ee32c1c46.jpg",
      name: "veg Burger",
      price: 200,
      taxes: 5,
    },
    item3: {
      id: 3,
      image:
        "https://b.zmtcdn.com/data/pictures/2/19082182/9f2f843523d0e8b9ecd9ee9ee32c1c46.jpg",
      name: "Chicken Burger",
      price: 200,
      taxes: 5,
    },
    item4: {
      id: 4,
      image:
        "https://b.zmtcdn.com/data/pictures/2/19082182/9f2f843523d0e8b9ecd9ee9ee32c1c46.jpg",
      name: "Crispy Chicken",
      price: 200,
      taxes: 5,
    },
    item5: {
      id: 5,
      image:
        "https://b.zmtcdn.com/data/pictures/2/19082182/9f2f843523d0e8b9ecd9ee9ee32c1c46.jpg",
      name: "Capricciosa",
      price: 200,
      taxes: 5,
    },
  };

  return (
    <div className={styles.burgerMenu}>
      <h1>Burgers</h1>
      <ItemCard Items={Items}></ItemCard>
    </div>
  );
};

export default BurgerMenu;
