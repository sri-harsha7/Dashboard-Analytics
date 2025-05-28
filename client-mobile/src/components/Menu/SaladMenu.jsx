import React from "react";
import ItemCard from "./ItemCard";

const SaladMenu = () => {
  const Items = {
    item1: {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeJOSf1N74JBnzUCLqBy0jqZRIQEMswFoAkcFV27jw5UXqtBIl315UinYgb2ZfxdYdgig&usqp=CAU",
      name: "salad",
      price: "200",
    },
    item2: {
      id: 2,
      image:
        "https://www.laylita.com/recetas/wp-content/uploads/Ensalada-de-lechuga-con-limon-y-cilantro.jpg",
      name: "salad",
      price: "200",
    },
    item3: {
      id: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgiwzp0Xlp78gnjW9__NAmW4P7ISGZl9P-iQ&s",
      name: "Capricciosa",
      price: "200",
    },
    item4: {
      id: 4,
      image:
        "https://w6h5a5r4.delivery.rocketcdn.me/wp-content/uploads/2019/05/ensalada-de-pasta-con-rosbif-de-atun-1080x671.jpg",
      name: "ensalda",
      price: "200",
    },
  };
  return (
    <div>
      <ItemCard Items={Items}></ItemCard>
    </div>
  );
};

export default SaladMenu;
