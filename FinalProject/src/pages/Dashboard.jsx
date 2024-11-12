import React, { useState, useEffect } from "react";
import Navbar from "../components/Layout/Navbar"; // Чорний Navbar
import Sidebar from "../components/Layout/Sidebar";
import { fetchData } from "../services/api";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchData().then((data) => setCourses(data));
  }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <Sidebar />
        <main className="dashboard-main">
          <h1>Welcome to the Dashboard</h1>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Course Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.id}>
                  <td>{course.id}</td>
                  <td>{course.name}</td>
                  <td>{course.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
