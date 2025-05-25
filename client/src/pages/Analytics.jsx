import React from "react";
import styles from "./Analytics.module.css";
import Card from "../components/Card";
import AnalyticsCard from "../components/AnalyticsCard";
import AnalyticsCard2 from "../components/AnalyticsCard2";

const Analytics = () => {
  return (
    <div className={styles.analytics}>
      <h2>Analytics</h2>
      <div className={styles.cards}>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <div className={styles.analyticsCards}>
        <AnalyticsCard></AnalyticsCard>
        <AnalyticsCard2></AnalyticsCard2>
        <AnalyticsCard></AnalyticsCard>
      </div>
    </div>
  );
};

export default Analytics;
