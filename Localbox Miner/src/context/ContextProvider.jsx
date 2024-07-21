import { createContext, useState } from "react";
export const ThemeContext=createContext();

export function ToggleTheme({children}){
    const [theme,setTheme]=useState('light');
    const toggleTheme=()=>{
        theme==='light'? setTheme('dark') : setTheme('light');
    }
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}