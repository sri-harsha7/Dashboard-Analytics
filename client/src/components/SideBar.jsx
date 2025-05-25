import React from "react";
import styles from "./SideBar.module.css";
import { BsGrid1X2Fill } from "react-icons/bs";
import { MdEventSeat } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";

const SideBar = () => {
  return (
    <div className={styles.sideBar}>
      <div className={styles.icon}>
        <BsGrid1X2Fill />
      </div>
      <div className={styles.icon}>
        <MdEventSeat />
      </div>
      <div className={styles.icon}>
        <FaBook />
      </div>
      <div className={styles.icon}>
        <SiGoogleanalytics />
      </div>
    </div>
  );
};

export default SideBar;
