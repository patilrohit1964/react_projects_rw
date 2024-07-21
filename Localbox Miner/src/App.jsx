import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import ThemeApp from './components/ThemeApp'

function App() {
  return(
    <div>
      <ThemeApp/>
      <Button/>
    </div>
  )
}

export default App
