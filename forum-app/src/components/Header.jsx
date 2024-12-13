import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="navbar">
      <div className="container">
        <h1 className="navbar-brand">Programmers' Forum</h1>
        <nav className="navbar-links">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Home
          </NavLink>
          <NavLink
            to="/forum"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Forum
          </NavLink>
          <NavLink
            to="/courses"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Courses
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;