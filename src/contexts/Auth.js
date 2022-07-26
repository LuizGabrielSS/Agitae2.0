import React, { createContext, useState } from 'react'

export const Auth = createContext({})

export default function AuthProvider({ children}) {
    
    const[Usuario, SetUsuario] = useState({})

    return(<Auth.Provider
    value={{SetUsuario,Usuario}}
    >
        {children}
    </Auth.Provider>)
}