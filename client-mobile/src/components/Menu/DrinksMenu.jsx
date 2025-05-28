import React from "react";
import ItemCard from "./ItemCard";

function DrinksMenu() {
  const Items = {
    item1: {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdKH5M4uTb5vafz6R2YXfF7eo3aWDx5B0cBg&s",
      name: "Thums Up",
      price: "200",
    },
    item2: {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdKH5M4uTb5vafz6R2YXfF7eo3aWDx5B0cBg&s",
      name: "Limca",
      price: "200",
    },
    item3: {
      id: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdKH5M4uTb5vafz6R2YXfF7eo3aWDx5B0cBg&s",
      name: "Sprite",
      price: "200",
    },
    item4: {
      id: 4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdKH5M4uTb5vafz6R2YXfF7eo3aWDx5B0cBg&s",
      name: "Pepsi",
      price: "200",
    },
    item5: {
      id: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdKH5M4uTb5vafz6R2YXfF7eo3aWDx5B0cBg&s",
      name: "Coca Cola",
      price: "200",
    },
  };
  return (
    <div>
      <h1>Drinks</h1>
      <ItemCard Items={Items}></ItemCard>
    </div>
  );
}

export default DrinksMenu;
