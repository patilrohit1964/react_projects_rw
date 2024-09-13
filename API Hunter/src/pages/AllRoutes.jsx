import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import SingleProductPage from './SingleProductPage'
import Login from './Login'
import Dashboard from './Dashboard'
import PrivateRoute from '../components/PrivateRoute'

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/singlepr/:id' element={<SingleProductPage/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/dashboard' element={<Dashboard/>}></Route>
                <Route element={<PrivateRoute/>}>
                
                </Route>
            </Routes>
        </div>
    )
}

export default AllRoutes