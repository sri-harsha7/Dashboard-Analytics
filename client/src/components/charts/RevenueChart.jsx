import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { day: "Mon", revenue: 1200 },
  { day: "Tue", revenue: 2100 },
  { day: "Wed", revenue: 800 },
  { day: "Thu", revenue: 1600 },
  { day: "Fri", revenue: 2400 },
  { day: "Sat", revenue: 2000 },
  { day: "Sun", revenue: 1800 },
];

const RevenueChart = () => (
  <div>
    <h3>Daily Revenue</h3>
    <LineChart width={400} height={250} data={data}>
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
