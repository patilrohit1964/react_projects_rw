import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import Product from '../components/Product'
import Login from '../components/Login'
import Private from '../private/Private'
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route element={<Private />}>
          <Route path='/product' element={<Product />}></Route>
        </Route>
        <Route path='/login' element={<Login />}></Route>
        {/* <Route path='/' element={}></Route> */}
      </Routes>
    </div>
  )
}

export default AllRoutes