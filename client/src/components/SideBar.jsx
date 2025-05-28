import React from "react";
import styles from "./SideBar.module.css";
import { BsGrid1X2Fill } from "react-icons/bs";
import { MdEventSeat } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";

const SideBar = () => {
  const nav = useNavigate();
  return (
    <div className={styles.sideBar}>
      <div
        className={styles.icon}
        onClick={() => {
          nav("/");
        }}
      >
        <BsGrid1X2Fill />
      </div>

      <div
        className={styles.icon}
        onClick={() => {
          nav("/tables");
        }}
      >
        <MdEventSeat />
      </div>
      <div
        className={styles.icon}
        onClick={() => {
          nav("/orderline");
        }}
      >
        <FaBook />
      </div>
      <div className={styles.icon}>
        <SiGoogleanalytics />
      </div>
    </div>
  );
};

export default SideBar;
