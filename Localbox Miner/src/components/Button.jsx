import React, { useContext } from 'react'
import { ThemeContext } from '../context/ContextProvider'

const Button = () => {
    const {toggleTheme,theme}=useContext(ThemeContext);
  return (
    <div>
        <button onClick={toggleTheme} style={{margin:"auto", display:"block"}}>Change Theme</button>
    </div>
  )
}

export default Button 