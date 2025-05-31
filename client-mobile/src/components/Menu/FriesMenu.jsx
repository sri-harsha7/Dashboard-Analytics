import React from "react";
import ItemCard from "./ItemCard";
import { useState, useEffect } from "react";
const URL = import.meta.env.VITE_BACKEND_URL;
const FriesMenu = () => {
  const [Items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      try {
        const response = await fetch(`${URL}/menu/friesmenu`);
        const data = await response.json();
        setItems(data);
      } catch (err) {
        console.error("Failed to fetch Fries menu:", err);
      }
    };

    getItems();
  }, []);
  console.log(Items);
  return (
    <div>
      <h1>Fries</h1>
      <ItemCard Items={Items}></ItemCard>
    </div>
  );
};

export default FriesMenu;
