import React from "react";
import styles from "./AnalyticsTable.module.css";
import { useDashboard } from "../../config/DashboardContext";

const AnalyticsTable = () => {
  const { tableData } = useDashboard();

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
