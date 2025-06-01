import React from "react";
import styles from "./Analytics.module.css";
import Card from "../components/Card";
import AnalyticsCard from "../components/AnalyticsCard";
import AnalyticsCard2 from "../components/AnalyticsCard2";
import AnalyticsCard3 from "../components/AnalyticsCard3";
import { PiBowlFoodBold } from "react-icons/pi";
import { MdCurrencyRupee } from "react-icons/md";
import { IoIdCardOutline } from "react-icons/io5";
import { PiUsersBold } from "react-icons/pi";
import { useDashboard } from "../config/DashboardContext";

const URL = import.meta.env.VITE_BACKEND_URL;

const Analytics = () => {
  const { overallAnalytics } = useDashboard();

  return (
    <div className={styles.analytics}>
      <h2>Analytics</h2>
      <div className={styles.cards}>
        <Card
          icon={<PiBowlFoodBold />}
          value={"04"}
          content={"Total Chefs"}
        ></Card>
        <Card
          icon={<MdCurrencyRupee />}
          value={overallAnalytics?.totalRevenue}
          content={"Total Revenue"}
        ></Card>
        <Card
          icon={<IoIdCardOutline />}
          value={overallAnalytics?.ordersServed}
          content={"Total Orders"}
        ></Card>
        <Card
          icon={<PiUsersBold />}
          value={overallAnalytics?.numberOfClients}
          content={"Total Clients"}
        ></Card>
      </div>
      <div className={styles.analyticsCards}>
        <AnalyticsCard></AnalyticsCard>
        <AnalyticsCard2></AnalyticsCard2>
        <AnalyticsCard3></AnalyticsCard3>
      </div>
      <div className={styles.tables}>
        <table>
          <thead>
            <tr>
              <th>Chef Name</th>
              <th>Orders Taken</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Chef 1</td>
              <td>03</td>
            </tr>
            <tr>
              <td>Chef 2</td>
              <td>07</td>
            </tr>
            <tr>
              <td>Chef 3</td>
              <td>05</td>
            </tr>
            <tr>
              <td>Chef 4</td>
              <td>08</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Analytics;
