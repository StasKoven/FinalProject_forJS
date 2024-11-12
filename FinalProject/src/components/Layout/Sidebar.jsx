import React from "react";
import "../../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar-menu">
        <li>Dashboard</li>
        <li>Courses</li>
        <li>Settings</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
