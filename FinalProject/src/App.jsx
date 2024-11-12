import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Login from "./components/auth/Login";
import Videos from "./pages/Videos";
import Dashboard from "./pages/Dashboard";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./utils/PrivateRoute";
import "./styles/App.css";

const App = () => {
  return (
    <AuthProvider>
    <Router>
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/videos" element={<Videos />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  </AuthProvider>
  );
};

export default App;