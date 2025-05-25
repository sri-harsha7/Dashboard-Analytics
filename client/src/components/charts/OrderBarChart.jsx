import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

const data = [
  { type: "Dine In", orders: 100 },
  { type: "Take Away", orders: 80 },
  { type: "Served", orders: 120 },
];

const OrderBarChart = () => (
  <div>
    <BarChart width={290} height={180} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="type" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="orders" fill="#82ca9d" />
    </BarChart>
  </div>
);

export default OrderBarChart;
