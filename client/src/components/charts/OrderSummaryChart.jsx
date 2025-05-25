import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "Dine In", value: 45 },
  { name: "Take Away", value: 30 },
  { name: "Served", value: 25 },
];

const COLORS = ["#00C49F", "#FFBB28", "#0088FE"];

const OrderSummaryChart = () => (
  <div>
    <PieChart width={160} height={270}>
      <Pie data={data} cx="50%" cy="50%" outerRadius={60} dataKey="value" label>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  </div>
);

export default OrderSummaryChart;
