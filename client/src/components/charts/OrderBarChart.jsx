import React from "react";
import { useDashboard } from "../../config/DashboardContext";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

// const OrderBarChart = () => (
//   <div>
//     <BarChart width={290} height={180} data={useDashboard().chartData}>
//       <CartesianGrid strokeDasharray="3 3" />
//       <XAxis dataKey="type" />
//       <YAxis />
//       <Tooltip />
//       <Legend />
//       <Bar dataKey="orders" fill="#82ca9d" />
//     </BarChart>
//   </div>
// );
const OrderBarChart = () => {
  const { chartData } = useDashboard();

  return (
    <div>
      <BarChart width={230} height={180} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="type" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="orders" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};
export default OrderBarChart;
