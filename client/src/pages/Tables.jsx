// import React from "react";
// import styles from "./Tables.module.css";
// import { RiDeleteBin5Line } from "react-icons/ri";
// import { useDashboard } from "../config/DashboardContext";

// const Tables = () => {
//   const [tableDetails, setTableDetails] = React.useState(false);
//   const { postTableData, setPostTableData, tableData } = useDashboard();
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setTableDetails(false);
//     const id = postTableData.length + 1;
//     const chairs = e.target[1].value;
//     const status = "Available";
//     setPostTableData([...postTableData, { id, chairs, status }]);
//   };
//   return (
//     <div className={styles.tables}>
//       <h2>Table Management</h2>
//       <div className={styles.tableGrid}>
//         {tableData.map((table) => (
//           <div
//             key={table.id}
//             className={`${styles.tableCard} ${
//               table.status.toLowerCase() === "available"
//                 ? styles.available
//                 : styles.reserved
//             }`}
//           >
//             <div
//               className={styles.deleteIcon}
//               onClick={() => {
//                 const updatedTableData = tableData.filter(
//                   (t) => t.id !== table.id
//                 );
//                 setPostTableData(updatedTableData);
//               }}
//             >
//               <RiDeleteBin5Line />
//             </div>
//             <h2>Table</h2>
//             <h1>{table.id}</h1>
//             <p>Chairs: {table.chairs}</p>

//             <div></div>
//           </div>
//         ))}
//         <div
//           className={styles.addTable}
//           onClick={() => {
//             setTableDetails(true);
//           }}
//         >
//           <p style={{ fontSize: "40px" }}>+</p>
//           {tableDetails && (
//             <div className={styles.formContainer}>
//               <form action="" className={styles.form} onSubmit={handleSubmit}>
//                 <input type="text" placeholder="Table Number" />
//                 <input type="number" placeholder="Chairs" />
//                 <button onClick={() => setTableDetails(false)}>Create</button>
//               </form>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Tables;

import React from "react";
import styles from "./Tables.module.css";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDashboard } from "../config/DashboardContext";
const URL = import.meta.env.VITE_BACKEND_URL;

const Tables = () => {
  const [tableDetails, setTableDetails] = React.useState(false);
  const { tableData, setTableData } = useDashboard();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setTableDetails(false);

    const id = tableData.length + 1;
    const chairs = e.target[1].value;
    const status = "Available";
    const newTable = { id, chairs, status };

    // Update local state first (so UI feels fast)
    setTableData([...tableData, newTable]);

    // Send data to backend
    try {
      const response = await fetch(`${URL}/table`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTable),
      });

      if (!response.ok) {
        throw new Error("Failed to add table");
      }

      const data = await response.json();
      console.log("Table added to backend:", data);
    } catch (error) {
      console.error("Error posting table data:", error);
    }
  };
  return (
    <div className={styles.tables}>
      <h2>Table Management</h2>
      <div className={styles.tableGrid}>
        {tableData.map((table) => (
          <div
            key={table.id}
            className={`${styles.tableCard} ${
              table.status?.toLowerCase() === "available"
                ? styles.available
                : styles.reserved
            }`}
          >
            <div
              className={styles.deleteIcon}
              onClick={() => {
                const updatedTableData = tableData.filter(
                  (t) => t.id !== table.id
                );
                setTableData(updatedTableData);
              }}
            >
              <RiDeleteBin5Line />
            </div>
            <h2>Table</h2>
            <h1>{table.id}</h1>
            <p>Chairs: {table.chairs}</p>

            <div></div>
          </div>
        ))}
        <div
          className={styles.addTable}
          onClick={() => {
            setTableDetails(true);
          }}
        >
          <p style={{ fontSize: "40px" }}>+</p>
          {tableDetails && (
            <div className={styles.formContainer} onSubmit={handleSubmit}>
              <form action="" className={styles.form}>
                <input type="text" placeholder="Table Number" />
                <input type="number" placeholder="Chairs" />
                <button onClick={() => setTableDetails(false)}>Create</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tables;
