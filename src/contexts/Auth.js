import React, { createContext, useState } from 'react'

export const Auth = createContext({})

export default function AuthProvider({ children }) {
    
    //Login
    const[Usuario, SetUsuario] = useState([])
    const[CPF,SetCPF] = useState([])
    const[Email,SetEmail] = useState([])
    const[Senha,SetSenha] = useState([])
    const[Celular,SetCelular] = useState([])
    const[Foto,SetFoto] = useState([])

    //Compras
    const[Carrinho,SetCarrinho] = useState([])
    const[Total,SetTotal] = useState(0)
    const[Quantidade,SetQuantidade] = useState(0)

    return(<Auth.Provider
    value={{SetUsuario,Usuario,Celular,SetCelular,Senha,SetSenha,Email,SetEmail,CPF,SetCPF,Foto,SetFoto,Total,SetTotal,Quantidade,SetQuantidade}}
    >
        {children}
    </Auth.Provider>)
}