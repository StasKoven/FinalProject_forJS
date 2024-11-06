import React from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Navbar />
            <div className="content">
                <Sidebar />
                <main>{children}</main>
            </div>
        </div>
    );
};

export default Layout;