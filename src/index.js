import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import TenderDetails from "./pages/TenderDetails";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/tender/:id" element={<TenderDetails />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
