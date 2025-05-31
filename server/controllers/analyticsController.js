// const Analytics = require("../models/Analytics");
// const Order = require("../models/Order");

// const getAnalytics = async (req, res) => {
//   try {
//     // Get all orders
//     const orders = await Order.find();

//     // 1. Total Revenue
//     const totalRevenue = orders.reduce(
//       (sum, order) => sum + (order.grandTotal || 0),
//       0
//     );

//     // 2. Total Number of Orders (Served)
//     const ordersServed = orders.length;

//     // 3. Unique Clients based on mobile number
//     const uniqueMobiles = new Set(orders.map((order) => order.mobile));
//     const numberOfClients = uniqueMobiles.size;

//     // 4. Count Dine In and Take Away
//     const dineInCount = orders.filter((order) => order.orderType === "dineIn").length;
//     const takeAwayCount = orders.filter((order) => order.orderType === "takeAway").length;

//     // 5. Optional: Save last order analytics
//     const latestOrder = orders[orders.length - 1];
//     if (latestOrder) {
//       const analytics = new Analytics({
//         order: latestOrder._id,
//         totalRevenue,
//       });
//       await analytics.save();
//     }

//     // 6. Return analytics data
//     res.status(200).json({
//       totalRevenue,
//       ordersServed,
//       numberOfClients,
//       dineInCount,
//       takeAwayCount,
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// module.exports = { getAnalytics };
const Analytics = require("../models/Analytics");
const Order = require("../models/Order");

const getAnalytics = async (req, res) => {
  try {
    const { range } = req.query; // daily, monthly, yearly
    let startDate = new Date();

    if (range === "daily") {
      startDate.setHours(0, 0, 0, 0);
    } else if (range === "monthly") {
      startDate = new Date(startDate.getFullYear(), startDate.getMonth(), 1);
    } else if (range === "yearly") {
      startDate = new Date(startDate.getFullYear(), 0, 1);
    } else {
      startDate = new Date(0); // All time
    }

    const orders = await Order.find({
      createdAt: { $gte: startDate },
    });

    const totalRevenue = orders.reduce(
      (sum, order) => sum + (order.grandTotal || 0),
      0
    );
    const ordersServed = orders.length;
    const uniqueMobiles = new Set(orders.map((order) => order.mobile));
    const numberOfClients = uniqueMobiles.size;
    const dineInCount = orders.filter(
      (order) => order.orderType === "dineIn"
    ).length;
    const takeAwayCount = orders.filter(
      (order) => order.orderType === "takeAway"
    ).length;

    res.status(200).json({
      totalRevenue,
      ordersServed,
      numberOfClients,
      dineInCount,
      takeAwayCount,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getRevenueData = async (req, res) => {
  const { range } = req.query;

  try {
    let matchStage = {};
    let groupStage = {};
    let format = "";

    if (range === "daily") {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const pastWeek = new Date(today);
      pastWeek.setDate(today.getDate() - 6);

      matchStage = { createdAt: { $gte: pastWeek } };
      groupStage = {
        _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
        total: { $sum: "$grandTotal" },
      };
    } else if (range === "weekly") {
      const today = new Date();
      const pastMonth = new Date();
      pastMonth.setDate(today.getDate() - 28);

      matchStage = { createdAt: { $gte: pastMonth } };
      groupStage = {
        _id: { $isoWeek: "$createdAt" },
        total: { $sum: "$grandTotal" },
      };
    } else if (range === "monthly") {
      const thisYear = new Date(new Date().getFullYear(), 0, 1);

      matchStage = { createdAt: { $gte: thisYear } };
      groupStage = {
        _id: { $month: "$createdAt" },
        total: { $sum: "$grandTotal" },
      };
    }

    const revenue = await Order.aggregate([
      { $match: matchStage },
      { $group: groupStage },
      { $sort: { _id: 1 } },
    ]);

    res.json(revenue);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAnalytics,
  getRevenueData,
};
