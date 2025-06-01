import React from "react";
import styles from "./OrderLine.module.css";
import { PiForkKnifeBold } from "react-icons/pi";

import { useDashboard } from "../config/DashboardContext";

const OrderLine = () => {
  const { orders } = useDashboard();
  return (
    <div className={styles.orderLine}>
      <h2>Orders</h2>
      <div className={styles.orderList}>
        {orders.map((order) => (
          <div
            key={order.id}
            className={`${styles.orderCard}`}
            style={
              order?.status.toLowerCase() === "done"
                ? { backgroundColor: "#B9F8C9" }
                : { backgroundColor: "#ffe3bC" }
            }
          >
            <div className={styles.orderInfo}>
              <div className={styles.orderDetails}>
                <p className={styles.orderId}>
                  <strong>
                    <PiForkKnifeBold />
                    {order?.id}
                  </strong>
                </p>
                <p>Table: {order?.table}</p>
                <p>Time: {order?.time}</p>
                <p style={{ fontSize: "25px" }}>{order?.items} Items</p>
              </div>
              <div
                className={`${styles.orderTime}`}
                style={
                  order?.status?.toLowerCase() === "done"
                    ? { backgroundColor: "#B9F8C9" }
                    : { backgroundColor: "#ffe3bC" }
                }
              >
                <p>{order?.type}</p>
                <p>{order?.served}</p>
              </div>
            </div>
            <div className={styles.orderItems}>
              {order?.items.map((item) => (
                <p key={item.id}>{item.name}</p>
              ))}
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
              {order?.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderLine;
