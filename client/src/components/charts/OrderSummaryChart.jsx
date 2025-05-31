import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useDashboard } from "../../config/DashboardContext";

const COLORS = ["#00C49F", "#FFBB28", "#0088FE"];

const OrderSummaryChart = () => (
  <div>
    <PieChart width={160} height={270}>
      <Pie
        data={useDashboard().chartData}
        cx="50%"
        cy="50%"
        outerRadius={60}
        dataKey="value"
        label
      >
        {useDashboard().chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  </div>
);

export default OrderSummaryChart;
