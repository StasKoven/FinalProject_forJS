import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children, role }) {
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user || (role && user.role !== role)) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default PrivateRoute;