import React from "react";
import styles from "./Home.module.css";

import Menu from "../components/Menu/Menu";

const Home = () => {
  return (
    <div className={styles.home}>
      <Menu></Menu>
    </div>
  );
};

export default Home;
