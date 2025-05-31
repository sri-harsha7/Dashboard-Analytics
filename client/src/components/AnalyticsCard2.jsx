import React from "react";
import styles from "./AnalyticsCard2.module.css";
import RevenueChart from "./charts/RevenueChart";
import { useEffect } from "react";
import { useDashboard } from "../config/DashboardContext";
import { useState } from "react";

const AnalyticsCard2 = () => {
  const [range, setRange] = useState("daily");
  const { fetchRevenue } = useDashboard();
  useEffect(() => {
    fetchRevenue(range);
  }, [range]);
  return (
    <div className={styles.analyticsCard2}>
      <div className={styles.heading}>
        <div>
          <h2>Revenue</h2>
          <p>Lorem ipsum dolor sit </p>
        </div>
        <div className={styles.selector}>
          <select
            name="selector"
            id="selector"
            onChange={(e) => {
              const value = e.target.value;
              if (value) {
                setRange(value.toLowerCase());
              }
            }}
          >
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
