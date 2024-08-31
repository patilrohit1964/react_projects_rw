import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Loading from './pages/Loading';
import Navbar from './components/Navbar';
import AllRoutes from './AllRoutes';
import ReqError from './pages/ReqError';
const App = () => {
  const { isError, isLoading } = useSelector((store) => store.ProductReducer);

  return isLoading ? <Loading /> : isError ? <ReqError /> : (
    <div>
      <Navbar />
      <AllRoutes />
    </div>
  )
}

export default App