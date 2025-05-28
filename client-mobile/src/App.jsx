import React from "react";
import styles from "./App.module.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Heading from "./components/Heading";

const App = () => {
  return (
    <div className={styles.app}>
      <Router>
        <Heading></Heading>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/order" element={<Order></Order>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
