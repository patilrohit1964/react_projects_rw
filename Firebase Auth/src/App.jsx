import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './components/Login';
import Product from './components/Product';
import NavbarNav from './components/NavbarNav';
import Private from './private/Private';
import SignUp from './components/SignUp';
const App = () => {
  return (
    <BrowserRouter>
      <NavbarNav />
      <Routes>
        <Route element={<Private />}>
          <Route path='/' element={<Product />}></Route>
        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App