import api from '../services/ApiRotaPrincipal';
import React, {Component,useState, useEffect} from 'react';
import LOG from '../services/conectAPI'

//Função para recarregar a token e a refreshToken
async function Recarregar(){
    const header = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':'Bearer ' + Refresh
    }
    api.post(LOG("Recarregar"),{"body":"body"},{headers:header})
    //.then((response) => console.log(response))
        .then((response) => {
            SetDataToken(response),
            SetExecuted(true)
            })
        .catch((error) => {
            setStatusToken(error.response.status);
        })
}

async function Puxar({URL,Token}){ 
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization':'Bearer ' + Token
    }

    await api.post(LOG(URL),{"body":"body"},{headers:headers})
    //.then((response) => console.log(response))

    .then((response) => {
        SetData(response),
        SetExecuted(true)
        })
    .catch((error) => {
        SetStatus(error.response.status);
    })
}

export default function Validar(URL){

    //Espero que funcione kkkk
    const[Token,setToken] = useState([])
    const[Refresh,setRefresh] = useState([])

    //ESPERO MUITO QUE FUNCIONE
    const[DataToken,SetDataToken] =useState([])
    const[StatusToken,setStatusToken] = useState([])

    const[data,SetData] = useState([])
    const[status,SetStatus] = useState([])
    const[executed,SetExecuted] = useState([])

    async function logar({cpf,senha}){

        if(!executed){
    
          const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'email':cpf,
            'senha':senha,
          }
    
          await api.post("/login",{"body":"body"},{headers:headers})
          //.then((response) => console.log(response))
    
          .then((response) => {
              SetData(response.data[0]),
              SetExecuted(true)
            })
          .catch((err) => {
            console.error("O erro foi "+ err);
        })
     }
    }

    if(URL == "login"){
        logar({cpf,senha})
    }

    //função padrão
    if(!executed){
        Puxar(URL,SetData,SetStatus,SetExecuted, Token)

        useEffect(() => {
            verificar()
          },[Token])
        
        function verificar({navigation}){
        //console.log(Refresh)
        if(Token == "User Not Found!"){
            SetTexto("Usuario não encontrado")
            //console.log(token.t)
            setExecuted(false)
        }else if(Token == 'Senha incorreta!'){
            SetTexto("Senha incorreta")
            //console.log(token.t)
            setExecuted(false)
        }else if(Token.length != 0){
            setExecuted(false)
            return navigation.navigate('Home');
            //console.log(token.t)
            //console.log(Refresh.RefreshToken)
        }else{
            setExecuted(false)
        }
        }
    }
    //Caso a token falhe
    if(status == 401){
        Recarregar()
        if(StatusToken == 401){
            return console.log("VAI TER QUE FAZER LOGIN DNV")
        }
        else{
        useEffect(() => {
            setToken(data.Token)
            setRefresh(data.RefreshToken)
        },[DataToken])

        Puxar(URL,SetData,SetStatus,SetExecuted, Token)
    }
    }else{
        Puxar(Puxar(URL,SetData,SetStatus,SetExecuted))   
        useEffect(() => {
            setToken(data.Token)
            setRefresh(data.RefreshToken)
            SetExecuted(false)
            console.log(status)
        },[data])
    }

}