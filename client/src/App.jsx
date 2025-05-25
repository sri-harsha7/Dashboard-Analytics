import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Analytics from "./pages/Analytics";
import SideBar from "./components/SideBar";
import OrderLine from "./pages/OrderLine";
import Tables from "./pages/Tables";
import TopBar from "./components/TopBar";

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.sideBar}>
        <SideBar></SideBar>
      </div>
      <div className={styles.container}>
        <div className={styles.topBar}>
          <TopBar></TopBar>
        </div>
        <div className={styles.content}>
          <Router>
            <Routes>
              <Route path="/" element={<Analytics />} />
              <Route path="/tables" element={<Tables />} />
              <Route path="/orderline" element={<OrderLine />} />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
};

export default App;
