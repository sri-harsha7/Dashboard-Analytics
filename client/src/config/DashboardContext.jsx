import { useEffect } from "react";
import { useContext, createContext, useState } from "react";

const URL = import.meta.env.VITE_BACKEND_URL;

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [value, setValue] = useState(0);
  const [chartData, setChartData] = useState([]);
  const [revenueData, setRevenueData] = useState([]);

  const fetchAnalytics = async (range = "daily") => {
    try {
      const response = await fetch(`${URL}/analytics?range=${range}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setValue(data);
      const formatted = [
        { name: "Dine In", value: data.dineInCount },
        { name: "Take Away", value: data.takeAwayCount },
        { name: "Served", value: data.ordersServed },
      ];
      setChartData(formatted);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchRevenue = async (range = "daily") => {
    try {
      const response = await fetch(`${URL}/analytics/revenue?range=${range}`);
      const data = await response.json();
      if (Array.isArray(data)) {
        const formatted = data.map((entry) => ({
          label: entry._id,
          revenue: entry.total,
        }));
        setRevenueData(formatted);
      } else {
        console.error("Invalid data format");
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <DashboardContext.Provider
      value={{ value, chartData, fetchAnalytics, revenueData, fetchRevenue }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => useContext(DashboardContext);
