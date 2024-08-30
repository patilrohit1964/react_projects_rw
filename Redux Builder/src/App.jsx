import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from './pages/Loading';
import Navbar from './components/Navbar';
import AllRoutes from './AllRoutes';
import ReqError from './pages/ReqError';
const App = () => {
  const { isError, isLoading, data } = useSelector((store) => store.Reducer);
  // const dispatch = useDispatch();

  return isLoading ? <Loading /> : isError ? <ReqError /> : (
    <div>
      <Navbar />
      <AllRoutes />
    </div>
  )
}

export default App