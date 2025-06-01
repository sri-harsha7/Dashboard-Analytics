import React from "react";
import styles from "./AnalyticsCard.module.css";
import RevenueChart from "./charts/RevenueChart";
import OrderBarChart from "./charts/OrderBarChart";
import OrderSummaryChart from "./charts/OrderSummaryChart";
import { useDashboard } from "../config/DashboardContext";

const AnalyticsCard = () => {
  const { filteredAnalytics, fetchFilteredAnalytics } = useDashboard();

  const handleChange = (e) => {
    const range = e.target.value.toLowerCase(); // daily, monthly, yearly
    fetchFilteredAnalytics(range);
  };

  return (
    <div className={styles.analyticsCard}>
      <div className={styles.heading}>
        <div>
          <h2>Analytics</h2>
          <p>Filtered overview based on time range</p>
        </div>
        <div className={styles.selector}>
          <select name="selector" id="selector" onChange={handleChange}>
            <option value="Daily">Daily</option>
            <option value="Monthly">Monthly</option>
            <option value="Yearly">Yearly</option>
          </select>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.chart}>
          <div className={styles.card}>
            <h2>{filteredAnalytics?.ordersServed ?? "—"}</h2>
            <p>Served</p>
          </div>
          <div className={styles.card}>
            <h2>{filteredAnalytics?.dineInCount ?? "—"}</h2>
            <p>Dine In</p>
          </div>
          <div className={styles.card}>
            <h2>{filteredAnalytics?.takeAwayCount ?? "—"}</h2>
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
          <div className={styles.pieChart}>
            <OrderSummaryChart />
          </div>
          <div className={styles.barChart}>
            <OrderBarChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCard;
