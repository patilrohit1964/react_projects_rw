import { useState } from 'react'
import './App.css'
import NavbarLink from './components/NavbarLink'
import AllRoutes from './routes/AllRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavbarLink/>
      <AllRoutes/>
    </div>
  )
}

export default App
