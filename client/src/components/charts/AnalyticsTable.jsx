import React from "react";
import styles from "./AnalyticsTable.module.css";

const tableData = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  chairs: Math.floor(Math.random() * 6) + 1,
  status: Math.random() > 0.5 ? "Available" : "Reserved",
}));

const AnalyticsTable = () => {
  return (
    <div className={styles.tables}>
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
            <h3>Table</h3>
            <h1>{table.id}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnalyticsTable;
