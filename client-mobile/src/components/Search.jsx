import React from "react";
import styles from "./Search.module.css";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className={styles.search}>
      <div>
        <CiSearch />
      </div>
      <input
        type="text"
        placeholder="Search"
        value=""
        className={styles.input}
      />
    </div>
  );
};

export default Search;
