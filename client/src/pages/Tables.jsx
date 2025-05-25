import React from "react";
import styles from "./Tables.module.css";
import { RiDeleteBin5Line } from "react-icons/ri";

const tableData = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  chairs: Math.floor(Math.random() * 6) + 1,
  status: Math.random() > 0.5 ? "Available" : "Reserved",
}));

const Tables = () => {
  return (
    <div className={styles.tables}>
      <h2>Table Management</h2>
      <div className={styles.tableGrid}>
        {tableData.map((table) => (
          <div
            key={table.id}
            className={`${styles.tableCard} ${
              table.status.toLowerCase() === "available"
                ? styles.available
                : styles.reserved
            }`}
          >
            <div className={styles.deleteIcon}>
              <RiDeleteBin5Line />
            </div>
            <h2>Table</h2>
            <h1>{table.id}</h1>
            <p>Chairs: {table.chairs}</p>

            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tables;
