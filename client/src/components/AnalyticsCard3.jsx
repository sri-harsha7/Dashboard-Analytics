import React from "react";
import styles from "./AnalyticsCard3.module.css";
import Tables from "../pages/Tables";
import AnalyticsTable from "./charts/AnalyticsTable";

const AnalyticsCard3 = () => {
  return (
    <div className={styles.analyticsCard2}>
      <div className={styles.heading}>
        <h2>Tables</h2>
        <div className={styles.status}>
          <div className={styles.reserved}>
            <div
              style={{
                width: "8.8px",
                height: "8.8px",

                background: "#3DC35F",
                marginRight: "10px",
              }}
            ></div>
            <div>
              <p>Reserved</p>
            </div>
          </div>
          <div className={styles.available}>
            <div
              style={{
                width: "8.8px",
                height: "8.8px",

                background: "white",
                border: "1px solid black",
                marginRight: "10px",
              }}
            ></div>
            <div>
              <p>Available</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <AnalyticsTable></AnalyticsTable>
      </div>
    </div>
  );
};

export default AnalyticsCard3;
