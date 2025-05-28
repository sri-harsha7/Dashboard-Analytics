import React from "react";
import styles from "./PizzaMenu.module.css";
import ItemCard from "./ItemCard";

const PizzaMenu = () => {
  const Items = {
    item1: {
      id: 1,
      image:
        "https://content.jdmagicbox.com/comp/def_content/pizza_outlets/default-pizza-outlets-13.jpg",
      name: "Capricciosa",
      price: "200",
    },
    item2: {
      id: 2,
      image:
        "https://content.jdmagicbox.com/comp/def_content/pizza_outlets/default-pizza-outlets-13.jpg",
      name: "Capricciosa",
      price: "200",
    },
    item3: {
      id: 3,
      image:
        "https://content.jdmagicbox.com/comp/def_content/pizza_outlets/default-pizza-outlets-13.jpg",
      name: "Capricciosa",
      price: "200",
    },
    item4: {
      id: 4,
      image:
        "https://content.jdmagicbox.com/comp/def_content/pizza_outlets/default-pizza-outlets-13.jpg",
      name: "Capricciosa",
      price: "200",
    },
    item5: {
      id: 5,
      image:
        "https://content.jdmagicbox.com/comp/def_content/pizza_outlets/default-pizza-outlets-13.jpg",
      name: "Capricciosa",
      price: "200",
    },
  };

  return (
    <div className={styles.pizzaMenu}>
      <h1>Pizza Menu</h1>
      <div>
        <div className={styles.items}>
          <ItemCard Items={Items}></ItemCard>
        </div>
      </div>
    </div>
  );
};

export default PizzaMenu;
