import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProductList from '../components/ProductList'
import AddProduct from '../components/AddProduct'
import Login from '../components/Login'
import EditProduct from '../components/EditProduct'
import Home from '../components/Home'
import About from '../components/About'
import Private from '../private/Private'
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route element={<Private />}>
          <Route path='/products' element={<ProductList />}></Route>
          <Route path='/editProduct/:id' element={<EditProduct />}></Route>
          <Route path='/addProduct' element={<AddProduct />}></Route>
        </Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes 