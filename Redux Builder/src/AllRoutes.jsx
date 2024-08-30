import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from './pages/Products'
import Login from './pages/Login'
import EditProduct from './pages/EditProduct'
import AddProduct from './pages/AddProduct'
import Private_route from './pages/Private_route'

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route element={<Private_route />}></Route>
                <Route path="/" element={<Products />} />
                <Route path="/editpr" element={<EditProduct />} />
                <Route path="/addpr" element={<AddProduct />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    )
}

export default AllRoutes