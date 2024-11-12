import React, { useState } from "react";
import "../../styles/Sidebar.css";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isCollapsed ? ">" : "<"}
      </button>
      <ul className="sidebar-menu">
        <li>Dashboard</li>
        <li>Courses</li>
        <li>Settings</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
