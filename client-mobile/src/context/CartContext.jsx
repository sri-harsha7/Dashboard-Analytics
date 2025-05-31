import React, { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

const URL = import.meta.env.VITE_BACKEND_URL;

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [search, setSearch] = useState("");
  const [cookingInstructions, setCookingInstructions] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${URL}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          mobile: phone,
          address: address,
        }),
      });
      const data = await response.json();
      toast.success(data.message);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleAdd = (item) => {
    setCartItems((prev) => {
      const current = prev[item.id];
      return {
        ...prev,
        [item.id]: {
          ...item,
          quantity: current ? current.quantity + 1 : 1,
        },
      };
    });
  };

  const handleRemove = (itemId) => {
    setCartItems((prev) => {
      const current = prev[itemId];
      if (!current) return prev;

      if (current.quantity > 1) {
        return {
          ...prev,
          [itemId]: {
            ...current,
            quantity: current.quantity - 1,
          },
        };
      } else {
        const updated = { ...prev };
        delete updated[itemId];
        return updated;
      }
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        handleAdd,
        handleRemove,
        name,
        handleNameChange,
        phone,
        handlePhoneChange,
        address,
        handleAddressChange,
        handleSubmit,
        search,
        setSearch,
        setCookingInstructions,
        cookingInstructions,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
