import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-secondary text-white p-4 shadow">
      <div className="container flex justify-between items-center">
        <h1 className="text-xl font-bold">Programmers' Forum</h1>
        <nav className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'active' : 'hover:bg-primary'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/forum"
            className={({ isActive }) =>
              isActive ? 'active' : 'hover:bg-primary'
            }
          >
            Forum
          </NavLink>
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              isActive ? 'active' : 'hover:bg-primary'
            }
          >
            Courses
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
