import React from "react";
import ItemCard from "./ItemCard";

const FriesMenu = () => {
  const Items = {
    item1: {
      id: 1,
      image:
        "https://thesaltedpotato.com/wp-content/uploads/2022/04/twice-fried-fries.webp",
      name: "Fries",
      price: "200",
    },
    item2: {
      id: 2,
      image:
        "https://thesaltedpotato.com/wp-content/uploads/2022/04/twice-fried-fries.webp",
      name: "Fries",
      price: "200",
    },
    item3: {
      id: 3,
      image:
        "https://thesaltedpotato.com/wp-content/uploads/2022/04/twice-fried-fries.webp",
      name: "potato fries",
      price: "200",
    },
    item4: {
      id: 4,
      image:
        "https://thesaltedpotato.com/wp-content/uploads/2022/04/twice-fried-fries.webp",
      name: "Cheesy Fries",
      price: "200",
    },
  };
  return (
    <div>
      <ItemCard Items={Items}></ItemCard>
    </div>
  );
};

export default FriesMenu;
