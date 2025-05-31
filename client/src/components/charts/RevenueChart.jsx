import React from "react";
import { useDashboard } from "../../config/DashboardContext";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const RevenueChart = () => (
  <div>
    <h3>Daily Revenue</h3>
    <LineChart width={400} height={250} data={useDashboard().revenueData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
    </LineChart>
  </div>
);

export default RevenueChart;
