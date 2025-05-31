import React from "react";
import styles from "./BurgerMenu.module.css";
import ItemCard from "./ItemCard";
import { useState, useEffect } from "react";
const URL = import.meta.env.VITE_BACKEND_URL;

const BurgerMenu = () => {
  const [Items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      try {
        const response = await fetch(`${URL}/menu/burgermenu`);
        const data = await response.json();
        setItems(data);
      } catch (err) {
        console.error("Failed to fetch Burger menu:", err);
      }
    };

    getItems();
  }, []); // empty dependency array = run once after mount

  console.log(Items);

  return (
    <div className={styles.burgerMenu}>
      <h1>Burgers</h1>
      <ItemCard Items={Items}></ItemCard>
    </div>
  );
};

export default BurgerMenu;
