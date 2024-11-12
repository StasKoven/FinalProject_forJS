import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <h1 className="logo">EduPlatform</h1>
        <nav className="nav-links">
          <NavLink to="/courses" activeClassName="active-link">
            Курси
          </NavLink>
          <NavLink to="/videos" activeClassName="active-link">
            Відео
          </NavLink>
          <NavLink to="/instructors" activeClassName="active-link">
            Викладачі
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
