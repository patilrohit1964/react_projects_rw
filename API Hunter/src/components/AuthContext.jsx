import React, { createContext, useContext } from 'react'

export const ContextDataProvider = createContext();


export const AuthContextProvider = ({ children }) => {

    function authState() {
        let token = null;
        let isAuth = false;
    }


    return <ContextDataProvider.Provider value={{authState,}}>{children}</ContextDataProvider.Provider>
}