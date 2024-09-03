import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const Private_route = ({ children }) => {
  const authToken=localStorage.getItem('token');

  return authToken ? <Outlet/> : <Navigate to={'/login'}/>;
}

export default Private_route