import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "pages/Dashboard/Dashboard";
import Login from "pages/auth/Login";
import Register from "pages/auth/Register";
import CompanyList from "pages/Dashboard/Company/CompanyList";
import "./assets/styles/index.css"
// Create a root
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

// Render the components inside the Router component
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard/*" element={<Dashboard />}>
        <Route path="companies" element={<CompanyList />} />
        {/* Add more nested routes here if needed */}
      </Route>
    </Routes>
  </Router>
);
