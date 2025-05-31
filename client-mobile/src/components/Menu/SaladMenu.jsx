import React from "react";
import ItemCard from "./ItemCard";
import { useState, useEffect } from "react";
const URL = import.meta.env.VITE_BACKEND_URL;

const SaladMenu = () => {
  const [Items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      try {
        const response = await fetch(`${URL}/menu/saladmenu`);
        const data = await response.json();
        setItems(data);
      } catch (err) {
        console.error("Failed to fetch Salad menu:", err);
      }
    };

    getItems();
  }, []);
  return (
    <div>
      <h1>Salad</h1>
      <ItemCard Items={Items}></ItemCard>
    </div>
  );
};

export default SaladMenu;
