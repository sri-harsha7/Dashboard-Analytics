import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Analytics from "./pages/Analytics";
import SideBar from "./components/SideBar";
import OrderLine from "./pages/OrderLine";
import Tables from "./pages/Tables";

const App = () => {
  return (
    <div className={styles.app}>
      <div>
        <SideBar></SideBar>
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Analytics />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/orderline" element={<OrderLine />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
