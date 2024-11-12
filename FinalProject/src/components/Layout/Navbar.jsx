import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "../../styles/Navbar.css";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <h1 className="logo">EduPlatform</h1>
        <nav className="nav-links">
          {user && (
            <>
              <NavLink to="/dashboard" activeClassName="active-link">
                Головна
              </NavLink>
              <NavLink to="/videos" activeClassName="active-link">
                Відео
              </NavLink>
              <button onClick={handleLogout} className="logout-btn">
                Вийти
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
