import React from 'react'
import { auth } from '../firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet } from 'react-router-dom';

const Private = () => {
    const [user, loading, error] = useAuthState(auth);
    let emailCheck=localStorage.getItem('email');
  return emailCheck ? <Outlet/> : <Navigate to='/login'/>
}

export default Private