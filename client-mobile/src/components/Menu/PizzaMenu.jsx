import React, { useEffect, useState } from "react";
import styles from "./PizzaMenu.module.css";
import ItemCard from "./ItemCard";

const URL = import.meta.env.VITE_BACKEND_URL;

const PizzaMenu = () => {
  const [Items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      try {
        const response = await fetch(`${URL}/menu/pizzamenu`);
        const data = await response.json();
        setItems(data);
      } catch (err) {
        console.error("Failed to fetch pizza menu:", err);
      }
    };

    getItems();
  }, []); // empty dependency array = run once after mount

  console.log(Items);

  return (
    <div className={styles.pizzaMenu}>
      <h1>Pizza Menu</h1>
      <div className={styles.items}>
        <ItemCard Items={Items} />
      </div>
    </div>
  );
};

export default PizzaMenu;
