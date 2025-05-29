import React from "react";
import styles from "./Checkout.module.css";
import { useCart } from "../context/CartContext";
import SlideToOrder from "../components/SlideToOrder";
import toast, { Toaster } from "react-hot-toast";

const Checkout = () => {
  const {
    cartItems,
    handleAdd,
    handleRemove,
    name,
    phone,
    address,
    setCookingInstructions,
    cookingInstructions,
  } = useCart();
  const [orderType, setOrderType] = React.useState("dineIn");
  const [instructions, setInstructions] = React.useState(false);
  const handleInstructions = () => {
    setInstructions(!instructions);
  };

  console.log(cartItems);
  return (
    <div className={styles.checkout}>
      <div className={styles.cartItems}>
        {Object.values(cartItems).map((item) => (
          <div className={styles.cartItem}>
            <div className={styles.itemImage}>
              <img src={item.image} alt={item.name} />
            </div>
            <div className={styles.itemDetails}>
              <div className={styles.itemInfo}>
                <h2>{item.name}</h2>
                <p>{item.price}</p>
              </div>

              <div className={styles.addToCart}>
                {item.quantity > 0 ? (
                  <div className={styles.counter}>
                    <button onClick={() => handleRemove(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleAdd(item)}>+</button>
                  </div>
                ) : (
                  <button onClick={() => handleAdd(item)}>+</button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.instructions} onClick={handleInstructions}>
        <p>Add Cooking Instructions (Optional)</p>
      </div>
      <div className={styles.cookingInstructions}>
        {instructions && (
          <div className={styles.instructionsInput}>
            <h1>Add Cooking Instructions</h1>
            <div className={styles.textArea}>
              <textarea
                onChange={(e) => setCookingInstructions(e.target.value)}
              ></textarea>
            </div>
            <div>
              The Restuarant will try its best to follow your Request . However
              refunds or cancellations in this regard wont be possible
            </div>
            <div className={styles.buttons}>
              <button onClick={handleInstructions}>Cancel</button>
              <button
                onClick={() => {
                  {
                    console.log(cookingInstructions), handleInstructions();
                  }
                }}
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
      <div className={`${styles.orderType}`}>
        <button
          className={`${styles.dineIn}  ${
            orderType === "dineIn" ? styles.active : ""
          }`}
          onClick={() => setOrderType("dineIn")}
        >
          Dine In
        </button>
        <button
          className={`${styles.takeAway}  ${
            orderType === "takeAway" ? styles.active : ""
          }`}
          onClick={() => setOrderType("takeAway")}
        >
          Take Away
        </button>
      </div>
      <div className={styles.orderDetails}>
        <div className={styles.itemTotal}>
          <p>Item Total</p>
          <p>
            {Object.values(cartItems).reduce(
              (total, item) => total + Number(item.price) * item.quantity,
              0
            )}
          </p>
        </div>
        {orderType === "takeAway" && (
          <div className={styles.deliveryFee}>
            <p>Delivery Fee</p>
            <p>50</p>
          </div>
        )}
        {orderType === "dineIn" && (
          <div className={styles.deliveryFee}>
            <p>Delivery Fee</p>
            <p>₹ Free</p>
          </div>
        )}
        <div className={styles.taxes}>
          <p>Taxes</p>
          <p>
            {Object.values(cartItems).reduce(
              (total, item) => total + Number(item.taxes),
              0
            )}
          </p>
        </div>
        <div className={styles.grandTotal}>
          <p>Total</p>
          <p>
            {Object.values(cartItems).reduce(
              (total, item) =>
                total +
                Number(item.price) * item.quantity +
                Number(item.taxes) * item.quantity,
              0
            )}
          </p>
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.yourDetails}>
          <p className={styles.title}>Your Details</p>
          <p>{`${name}, ${phone}`}</p>
        </div>
        {orderType === "takeAway" && (
          <div className={styles.address}>
            <p>{address}</p>
          </div>
        )}
      </div>
      <div className={styles.placeOrder}>
        <SlideToOrder
          onSlideComplete={() => toast.success("Order Placed Successfully")}
        />
      </div>
    </div>
  );
};

export default Checkout;
