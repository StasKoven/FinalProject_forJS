import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-primary text-white p-4 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Programmers' Forum</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/forum" className="hover:underline">
            Forum
          </Link>
          <Link to="/courses" className="hover:underline">
            Courses
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
