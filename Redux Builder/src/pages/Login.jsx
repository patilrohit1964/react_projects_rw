import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Login_Request, Login_Success, Login_Failed } from '../redux/ActionType';
import Loading from '../pages/Loading'
import { useNavigate } from 'react-router-dom'
import ReqError from './ReqError';
const Login = () => {
  const { isError, isLoading, token } = useSelector((store) => store.LoginReducer);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleUserData = async (userData) => {
    dispatch({ type: Login_Request });
    try {
      let data = await axios.post('https://reqres.in/api/login', userData);
      dispatch({ type: Login_Success, payload: data.data.token });
      navigate('/');
    } catch (err) {
      dispatch({ type: Login_Failed });
    }

  };

  useEffect(() => {
    if (token) {
      navigate('/');
      // dispatch({ type: Login_Success, payload: token });
    }
  }, [])
  const handleLogin = (e) => {
    e.preventDefault();
    if (email.trim()==='' || password.trim()==='') {
      alert('Please fill all fields');
      return;
    }
    const userData = {
      email,  
      password
    };
    handleUserData(userData);
  };

  return isLoading ? <Loading /> : isError ? <ReqError /> : (
    <div className='h-screen flex items-center justify-center bg-gray-900'>
      <form onSubmit={handleLogin} className='p-8 border border-orange-500 h-80 rounded-3xl'>
        <div className='mb-8'>
          <label htmlFor="email" className='text-white'>Email</label>
          <input
            id='email'
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-primary w-full max-w-xs"
          />
        </div>
        <div>
          <label htmlFor="password" className='text-white'>Password</label>
          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input input-primary outline w-full max-w-xs"
          />
        </div>
        <button className="btn m-auto block mt-5 btn-outline btn-warning">Login</button>
      </form>

    </div>
  );
};

export default Login;
