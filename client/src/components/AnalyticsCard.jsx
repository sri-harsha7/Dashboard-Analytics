import React from "react";
import styles from "./AnalyticsCard.module.css";
import RevenueChart from "./charts/RevenueChart";
import OrderBarChart from "./charts/OrderBarChart";

import OrderSummaryChart from "./charts/OrderSummaryChart";

const AnalyticsCard = () => {
  return (
    <div className={styles.analyticsCard}>
      <div className={styles.heading}>
        <div>
          <h2>Analytics</h2>
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
        <div className={styles.chart}>
          <div className={styles.card}>
            <h2>order</h2>
            <p>Served</p>
          </div>
          <div className={styles.card}>
            <h2>order</h2>
            <p>Dine In</p>
          </div>
          <div className={styles.card}>
            <h2>order</h2>
            <p>Take Away</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className={styles.chart}>
            <OrderSummaryChart />
          </div>
          <div>
            <OrderBarChart></OrderBarChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCard;
