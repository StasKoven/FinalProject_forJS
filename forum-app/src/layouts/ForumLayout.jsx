import React from 'react';
import Header from '../components/Header';

function ForumLayout({ children }) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main className="container mx-auto p-4">{children}</main>
    </div>
  );
}

export default ForumLayout;
