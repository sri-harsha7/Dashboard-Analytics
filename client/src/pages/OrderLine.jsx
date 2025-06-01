// import React from "react";
// import styles from "./OrderLine.module.css";
// import { PiForkKnifeBold } from "react-icons/pi";

// import { useDashboard } from "../config/DashboardContext";

// const OrderLine = () => {
//   const { orders } = useDashboard();
//   console.log(orders);
//   return (
//     <div className={styles.orderLine}>
//       <h2>Orders</h2>
//       <div className={styles.orderList}>
//         {Object.values(orders).map((order) => (
//           <div
//             key={order?.id}
//             className={`${styles.orderCard}`}
//             style={
//               order?.status === "Done"
//                 ? { backgroundColor: "#B9F8C9" }
//                 : { backgroundColor: "#ffe3bC" }
//             }
//           >
//             <div className={styles.orderInfo}>
//               <div className={styles.orderDetails}>
//                 <p className={styles.orderId}>
//                   <strong>
//                     <PiForkKnifeBold />
//                     {order?.id}
//                   </strong>
//                 </p>
//                 <p>Table: {order?.table}</p>
//                 <p>Time: {order?.time}</p>
//                 <p style={{ fontSize: "25px" }}>{order?.items} Items</p>
//               </div>
//               <div
//                 className={`${styles.orderTime}`}
//                 style={
//                   order?.status === "Done"
//                     ? { backgroundColor: "#B9F8C9" }
//                     : { backgroundColor: "#ffe3bC" }
//                 }
//               >
//                 <p>{order?.type}</p>
//                 <p>{order?.served}</p>
//               </div>
//             </div>
//             <div className={styles.orderItems}>
//               {order?.items.map((item) => (
//                 <p key={item.id}>{item.name}</p>
//               ))}
//             </div>
//             <div
//               className={`${styles.orderStatus}
//               `}
//               style={
//                 order.status === "Done"
//                   ? { backgroundColor: "#B9F8C9" }
//                   : { backgroundColor: "#ffe3bC" }
//               }
//             >
//               {order?.status}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OrderLine;

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
        {Object.values(orders).map((order, index) => (
          <div
            key={order?.id || order?._id || index} // fallback to index if needed
            className={styles.orderCard}
            style={{
              backgroundColor: order?.status === "Done" ? "#B9F8C9" : "#ffe3bC",
            }}
          >
            <div className={styles.orderInfo}>
              <div className={styles.orderDetails}>
                <p className={styles.orderId}>
                  <strong>
                    <PiForkKnifeBold />
                    {order?.id || order?._id}
                  </strong>
                </p>
                <p>Table: {order?.table}</p>
                <p>Time: {order?.time}</p>
                <p style={{ fontSize: "25px" }}>
                  {order?.items?.length || 0} Items
                </p>
              </div>
              <div
                className={styles.orderTime}
                style={{
                  backgroundColor:
                    order?.status === "Done" ? "#B9F8C9" : "#ffe3bC",
                }}
              >
                <p>{order?.type}</p>
                <p>{order?.served}</p>
              </div>
            </div>

            <div className={styles.orderItems}>
              {(order?.items || []).map((item, idx) => (
                <p key={item?.id || item?._id || idx}>
                  {item?.name} {item?.quantity}
                </p>
              ))}
            </div>
            <div>{<p>{order?.item?.cookingInstructions}</p>}</div>

            <div
              className={styles.orderStatus}
              style={{
                backgroundColor:
                  order?.status === "Done" ? "#B9F8C9" : "#ffe3bC",
              }}
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
