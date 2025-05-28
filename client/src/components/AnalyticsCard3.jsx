import React from "react";
import styles from "./AnalyticsCard3.module.css";
import Tables from "../pages/Tables";
import AnalyticsTable from "./charts/AnalyticsTable";

const AnalyticsCard3 = () => {
  return (
    <div className={styles.analyticsCard2}>
      <div className={styles.heading}>
        <div>
          <h2>Revenue</h2>
          <p>Lorem ipsum dolor sit </p>
        </div>
      </div>
      <div className={styles.content}>
        <AnalyticsTable></AnalyticsTable>
      </div>
    </div>
  );
};

export default AnalyticsCard3;
