import React, { createContext, useState } from 'react'
import Fotos from './Sem_Foto.jpg'

export const Auth = createContext({})

export default function AuthProvider({ children }) {
    
    //Login
    const[Usuario, SetUsuario] = useState("Luiz")
    const[CPF,SetCPF] = useState('000.000.000-00')
    const[Email,SetEmail] = useState('email.email@email.com')
    const[Senha,SetSenha] = useState('123456')
    const[Celular,SetCelular] = useState('(00) 00000-0000')
    const[Foto,SetFoto] = useState(Fotos.uri)

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