import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const Private_route = ({ children }) => {
  const { token } = useSelector((store) => store.LoginReducer)
 
  return token ? <Outlet/> : <Navigate to={'/login'}/>;
}

export default Private_route