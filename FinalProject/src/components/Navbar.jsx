// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <h1>Освітня платформа</h1>
            <Link to="/">Головна</Link>
            <Link to="/courses">Курси</Link>
            <Link to="/profile">Профіль</Link>
        </nav>
    );
};

export default Navbar;
