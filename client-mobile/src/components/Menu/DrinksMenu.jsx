import React from "react";
import ItemCard from "./ItemCard";
import { useState, useEffect } from "react";
const URL = import.meta.env.VITE_BACKEND_URL;

const DrinksMenu = () => {
  const [Items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      try {
        const response = await fetch(`${URL}/menu/drinksmenu`);
        const data = await response.json();
        setItems(data);
      } catch (err) {
        console.error("Failed to fetch Drinks menu:", err);
      }
    };

    getItems();
  }, []);
  console.log(Items);
  return (
    <div>
      <h1>Drinks</h1>
      <ItemCard Items={Items}></ItemCard>
    </div>
  );
};

export default DrinksMenu;
