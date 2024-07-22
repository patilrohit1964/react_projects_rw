import { useState } from 'react'
import './App.css'
import NavbarLink from './components/NavbarLink'
import AllRoutes from './routes/AllRoutes'

function App() {
  return (
    <div>
      <NavbarLink/>
      <AllRoutes/>
    </div>
  )
}

export default App
