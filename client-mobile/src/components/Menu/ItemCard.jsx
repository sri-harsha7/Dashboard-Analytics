// import React from "react";
// import styles from "./ItemCard.module.css";

// const ItemCard = ({ Items }) => {
//   const [cartItems, setCartItems] = React.useState([]);

//   return (
//     <div className={styles.itemCard}>
//       {Object.values(Items).map((item) => (
//         <div key={item.id} className={styles.item}>
//           <div className={styles.itemImage}>
//             <img src={item.image} alt={item.name} />
//           </div>

//           <div className={styles.itemDetails}>
//             <div className={styles.itemNamePrice}>
//               <div className={styles.itemName}>
//                 <h2>{item.name}</h2>
//               </div>
//               <div className={styles.itemPrice}>
//                 <p>{item.price}</p>
//               </div>
//             </div>
//             <div
//               className={styles.addToCart}
//               onClick={() => {
//                 setCartItems(item);
//               }}
//             >
//               {cartItems.includes(item) ? cartItems.length() : "+"}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ItemCard;

// import React from "react";
// import styles from "./ItemCard.module.css";

// const ItemCard = ({ Items }) => {
//   const [cartItems, setCartItems] = React.useState({}); // object to track quantities by ID

//   const handleAdd = (itemId) => {
//     setCartItems((prev) => ({
//       ...prev,
//       [itemId]: (prev[itemId] || 0) + 1,
//     }));
//   };

//   const handleRemove = (itemId) => {
//     setCartItems((prev) => {
//       const updated = { ...prev };
//       if (updated[itemId] > 1) {
//         updated[itemId] -= 1;
//       } else {
//         delete updated[itemId];
//       }
//       return updated;
//     });
//   };

//   return (
//     <div className={styles.itemCard}>
//       {Object.values(Items).map((item) => {
//         const quantity = cartItems[item.id] || 0;

//         return (
//           <div key={item.id} className={styles.item}>
//             <div className={styles.itemImage}>
//               <img src={item.image} alt={item.name} />
//             </div>

//             <div className={styles.itemDetails}>
//               <div className={styles.itemNamePrice}>
//                 <h2>{item.name}</h2>
//                 <p>₹ {item.price}</p>
//               </div>

//               <div className={styles.addToCart}>
//                 {quantity > 0 ? (
//                   <div className={styles.counter}>
//                     <button onClick={() => handleRemove(item.id)}>-</button>
//                     <span>{quantity}</span>
//                     <button onClick={() => handleAdd(item.id)}>+</button>
//                   </div>
//                 ) : (
//                   <button onClick={() => handleAdd(item.id)}>+</button>
//                 )}
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default ItemCard;

import React from "react";
import styles from "./ItemCard.module.css";
import { useCart } from "../../context/CartContext";
const ItemCard = ({ Items }) => {
  const { cartItems, handleAdd, handleRemove } = useCart();
  console.log(cartItems);

  return (
    <div className={styles.itemCard}>
      {Object.values(Items).map((item) => {
        const quantity = cartItems[item.id]?.quantity || 0;

        return (
          <div key={item.id} className={styles.item}>
            <div className={styles.itemImage}>
              <img src={item.image} alt={item.name} />
            </div>

            <div className={styles.itemDetails}>
              <div className={styles.itemNamePrice}>
                <h2>{item.name}</h2>
                <p>₹ {item.price}</p>
              </div>

              <div className={styles.addToCart}>
                {quantity > 0 ? (
                  <div className={styles.counter}>
                    <button onClick={() => handleRemove(item.id)}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => handleAdd(item)}>+</button>
                  </div>
                ) : (
                  <button onClick={() => handleAdd(item)}>+</button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemCard;
