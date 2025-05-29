import React from "react";
import styles from "./Search.module.css";
import { CiSearch } from "react-icons/ci";
import { useCart } from "../context/CartContext";

const Search = () => {
  const { setSearch } = useCart();
  return (
    <div className={styles.search} onChange={(e) => setSearch(e.target.value)}>
      <div>
        <CiSearch />
      </div>
      <input type="text" placeholder="Search" className={styles.input} />
    </div>
  );
};

export default Search;
