import React from "react";
import styles from "./OrderLine.module.css";

const orders = [
  {
    id: "001",
    time: "9:37 AM",
    table: "05",
    items: 3,
    status: "Processing",
    duration: "4 min",
  },
  {
    id: "002",
    time: "9:45 AM",
    table: "02",
    items: 2,
    status: "Done",
    duration: "7 min",
  },
  {
    id: "001",
    time: "9:37 AM",
    table: "05",
    items: 3,
    status: "Processing",
    duration: "4 min",
  },
  {
    id: "002",
    time: "9:45 AM",
    table: "02",
    items: 2,
    status: "Done",
    duration: "7 min",
  },
  {
    id: "001",
    time: "9:37 AM",
    table: "05",
    items: 3,
    status: "Processing",
    duration: "4 min",
  },
  {
    id: "002",
    time: "9:45 AM",
    table: "02",
    items: 2,
    status: "Done",
    duration: "7 min",
  },
  {
    id: "001",
    time: "9:37 AM",
    table: "05",
    items: 3,
    status: "Processing",
    duration: "4 min",
  },
  {
    id: "002",
    time: "9:45 AM",
    table: "02",
    items: 2,
    status: "Done",
    duration: "7 min",
  },
];

const OrderLine = () => {
  return (
    <div className={styles.orderLine}>
      <h2>Orders</h2>
      <div className={styles.orderList}>
        {orders.map((order) => (
          <div key={order.id} className={styles.orderCard}>
            <p>
              <strong>Order #{order.id}</strong>
            </p>
            <p>Time: {order.time}</p>
            <p>Table: {order.table}</p>
            <p>Items: {order.items}</p>
            <p>Status: {order.status}</p>
            <p>Duration: {order.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderLine;
