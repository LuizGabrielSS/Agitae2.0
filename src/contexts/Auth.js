import React, { createContext, useState } from 'react'

export const Auth = createContext({})

export default function AuthProvider({ children }) {
    
    const[Usuario, SetUsuario] = useState([])
    const[CPF,SetCPF] = useState([])
    const[Email,SetEmail] = useState([])
    const[Senha,SetSenha] = useState([])
    const[Celular,SetCelular] = useState([])
    const[Foto,SetFoto] = useState([])

    return(<Auth.Provider
    value={{SetUsuario,Usuario,Celular,SetCelular,Senha,SetSenha,Email,SetEmail,CPF,SetCPF,Foto,SetFoto}}
    >
        {children}
    </Auth.Provider>)
}