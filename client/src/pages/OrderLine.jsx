import React from "react";
import styles from "./OrderLine.module.css";
import { PiForkKnifeBold } from "react-icons/pi";

const orders = [
  {
    id: "001",
    time: "9:37 AM",
    table: "05",
    items: 3,
    status: "Processing",
    duration: "4 min",
    type: "Dine In",
    served: `ongoing: 4 Min `,
    mealName: {
      name: "Veg Biryani",
      item1: "1X Double Cheese Buger",
      item2: "1X APPLE pIE",
      item3: "1X Coca-Cola",
    },
  },
  {
    id: "002",
    time: "9:45 AM",
    table: "02",
    items: 2,
    status: "Done",
    duration: "7 min",
    type: "Dine In",
    served: `ongoing: 4 Min `,
  },
  {
    id: "003",
    time: "9:37 AM",
    table: "05",
    items: 3,
    status: "Processing",
    duration: "4 min",
    type: "Dine In",
    served: `ongoing: 4Min `,
  },
  {
    id: "004",
    time: "9:45 AM",
    table: "02",
    items: 2,
    status: "Done",
    duration: "7 min",
    type: "Dine In",
    served: `ongoing: 4Min `,
  },
  {
    id: "005",
    time: "9:37 AM",
    table: "05",
    items: 3,
    status: "Processing",
    duration: "4 min",
    type: "Dine In",
    served: `ongoing: 4Min `,
  },
  {
    id: "006",
    time: "9:45 AM",
    table: "02",
    items: 2,
    status: "Done",
    duration: "7 min",
    type: "Dine In",
    served: `ongoing: 4 Min `,
  },
  {
    id: "007",
    time: "9:37 AM",
    table: "05",
    items: 3,
    status: "Processing",
    duration: "4 min",
    type: "Dine In",
    served: `ongoing: 4 Min `,
  },
  {
    id: "008",
    time: "9:45 AM",
    table: "02",
    items: 2,
    status: " Order Done",
    duration: "7 min",
    type: "Dine In",
    served: `ongoing: 4 Min `,
  },
];

const OrderLine = () => {
  return (
    <div className={styles.orderLine}>
      <h2>Orders</h2>
      <div className={styles.orderList}>
        {orders.map((order) => (
          <div
            key={order.id}
            className={`${styles.orderCard}`}
            style={
              order.status.toLowerCase() === "done"
                ? { backgroundColor: "#B9F8C9" }
                : { backgroundColor: "#ffe3bC" }
            }
          >
            <div className={styles.orderInfo}>
              <div className={styles.orderDetails}>
                <p className={styles.orderId}>
                  <strong>
                    <PiForkKnifeBold />
                    {order.id}
                  </strong>
                </p>
                <p>Table: {order.table}</p>
                <p>Time: {order.time}</p>
                <p style={{ fontSize: "25px" }}>{order.items} Items</p>
              </div>
              <div
                className={`${styles.orderTime}`}
                style={
                  order.status === "Done"
                    ? { backgroundColor: "#B9F8C9" }
                    : { backgroundColor: "#ffe3bC" }
                }
              >
                <p>{order.type}</p>
                <p>{order.served}</p>
              </div>
            </div>
            <div className={styles.orderItems}>
              <p>{order.mealName?.name}</p>
              <p>{order.mealName?.item1}</p>
              <p>{order.mealName?.item2}</p>
              <p>{order.mealName?.item3}</p>
            </div>
            <div
              className={`${styles.orderStatus}
              `}
              style={
                order.status.toLowerCase() === "done"
                  ? { backgroundColor: "#B9F8C9" }
                  : { backgroundColor: "#ffe3bC" }
              }
            >
              {order.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderLine;
