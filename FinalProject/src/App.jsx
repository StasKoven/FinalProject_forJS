import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Videos from "./pages/Videos";
import Courses from "./pages/Courses";
import Instructors from "./pages/Instructors";
import "./styles/App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/courses" element={<Courses />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/" element={<Videos />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
