import { useEffect, useContext, createContext, useState } from "react";

const URL = import.meta.env.VITE_BACKEND_URL;

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [overallAnalytics, setOverallAnalytics] = useState({});
  const [filteredAnalytics, setFilteredAnalytics] = useState({});
  const [chartData, setChartData] = useState([]);
  const [revenueData, setRevenueData] = useState([]);
  const [orders, setOrders] = useState([]);
  const [tableData, setTableData] = useState([]);
  // const [getTableData, setGetTableData] = useState([]);

  console.log(orders);

  //Get Table Data

  const getTablesData = async () => {
    try {
      const response = await fetch(`${URL}/table`);
      const data = await response.json();
      setTableData(data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchOverallAnalytics = async () => {
    try {
      const response = await fetch(`${URL}/analytics`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      setOverallAnalytics(data);
    } catch (error) {
      console.error("Failed to fetch overall analytics", error);
    }
  };

  // Fetch filtered analytics based on range
  const fetchFilteredAnalytics = async (range = "daily") => {
    try {
      const response = await fetch(`${URL}/analytics?range=${range}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      setFilteredAnalytics(data);
      const formatted = [
        { name: "Dine In", value: data.dineInCount },
        { name: "Take Away", value: data.takeAwayCount },
        { name: "Served", value: data.ordersServed },
      ];
      setChartData(formatted);
    } catch (error) {
      console.error("Failed to fetch filtered analytics", error);
    }
  };

  // Fetch revenue chart data
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
        console.error("Invalid revenue data format");
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Fetch all orders
  const fetchOrders = async () => {
    try {
      const response = await fetch(`${URL}/order`);
      const data = await response.json();
      setOrders(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchOverallAnalytics(); // All-time data for summary cards
    fetchFilteredAnalytics("daily"); // Default range for analytics card
    fetchOrders();
    getTablesData();
    // Orders table
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        overallAnalytics,
        filteredAnalytics,
        fetchFilteredAnalytics,
        chartData,
        revenueData,
        fetchRevenue,
        orders,
        tableData,
        setTableData,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => useContext(DashboardContext);
