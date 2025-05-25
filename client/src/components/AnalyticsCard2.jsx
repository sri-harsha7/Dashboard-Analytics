import React from "react";
import styles from "./AnalyticsCard2.module.css";
import RevenueChart from "./charts/RevenueChart";

const AnalyticsCard2 = () => {
  return (
    <div className={styles.analyticsCard}>
      <div className={styles.heading}>
        <div>
          <h2>Revenue</h2>
          <p>Lorem ipsum dolor sit </p>
        </div>
        <div className={styles.selector}>
          <select name="selector" id="selector">
            <option value="Daily">Daily</option>
            <option value="Monthly">Monthly</option>
            <option value="Yearly">Yearly</option>
          </select>
        </div>
      </div>
      <div className={styles.content}>
        <RevenueChart></RevenueChart>
      </div>
    </div>
  );
};

export default AnalyticsCard2;
