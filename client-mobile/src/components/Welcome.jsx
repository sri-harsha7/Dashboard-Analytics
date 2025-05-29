import React from "react";
import styles from "./Welcome.module.css";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Welcome = () => {
  const navigate = useNavigate();
  const {
    handleNameChange,
    handlePhoneChange,
    handleAddressChange,
    handleSubmit,
  } = useCart();
  return (
    <div className={styles.welcome}>
      <h1 className={styles.h1}>Welcome </h1>

      <div className={styles.form}>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            onChange={handleNameChange}
            required
          />
          <input
            type="number"
            placeholder="Phone"
            onChange={handlePhoneChange}
            required
          />
          <textarea
            name=""
            id=""
            placeholder="Address (optional for TakeAway only)"
            onChange={handleAddressChange}
          ></textarea>
          <button
            className={styles.button}
            onClick={() => {
              navigate("/menu");
            }}
          >
            Place Your Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Welcome;
