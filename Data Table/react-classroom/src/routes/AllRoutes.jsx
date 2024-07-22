import React from 'react'
import {Routes,Route} from 'react-router-dom'
import ProductList from '../components/ProductList'
import AddProduct from '../components/AddProduct'
import Login from '../components/Login'
import ProductDetails from '../components/ProductDetails'
import EditProduct from '../components/EditProduct'
const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/productList' element={<ProductList/>}></Route>
            <Route path='/productDetails' element={<ProductDetails/>}></Route>
            <Route path='/editProduct' element={<EditProduct/>}></Route>
            <Route path='/addProduct' element={<AddProduct/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes