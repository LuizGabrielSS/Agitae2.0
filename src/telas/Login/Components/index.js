import React, {useState, useContext} from 'react';
import { TextInput, Text ,TouchableOpacity,ScrollView, View,KeyboardAvoidingView,Platform,Alert} from "react-native";
import estilos from './Estilos';
import {Auth} from '../../../contexts/Auth'
import FallBack from '../../../components/FallBack'
import Alerta from '../../../components/Alerta'

export default function TelaLogin({navigation}){

    //CONSTANTES DE EMAIL E LOGIN
    const[Email,SetEmail] = useState([])

    const[Password,SetPassword] = useState([])

    //CONSTANTES PARA VERIFICAR SE PODE LOGAR OU NÃO
    const {Usuario} = useContext(Auth)

    const {Senha} = useState(Auth)

    //CONSTANTES DE ESTILIZAÇÃO
    const[StatusEmail,SetStatusEmail] = useState(estilos.Input)

    const[StatusPassword,SetStatusPassword] = useState(estilos.Input)

    //Função do Botao Logar
    function Logar(){
        navigation.navigate('Inicial')
        /*
        if(Email.length != 0){
            if(Password.length != 0){
                if(Email == Usuario){
                    if(Password == Senha){
                        navigation.navigate('Inicial')
                    }else if(Password != Senha){
                        SetStatusPassword(estilos.InputErrado)
                        SetStatusEmail(estilos.Input)
                        Alerta("Campo Senha Errado","Senha Incorreta","OK",FallBack())
                    }
                }else if(Email != Usuario){
                    SetStatusEmail(estilos.InputErrado)
                    SetStatusPassword(estilos.Input)
                    Alerta("Campo Login Errado","Usuario não encontrado","OK",FallBack())
                }
            }else{
                SetStatusPassword(estilos.InputErrado)
                SetStatusEmail(estilos.Input)
                Alerta("Campo Login vazio","Não pode deixar campos vazios na tentativaa de login","OK",FallBack())
            }
        }else{
            SetStatusEmail(estilos.InputErrado)
            Alerta("Campo Login vazio","Não pode deixar campos vazios na tentativaa de login","OK",FallBack())
        }*/
    }

    return(<KeyboardAvoidingView
    behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
    style={estilos.Container}
    >
        <View style={estilos.ContainerLogin}>
            <Text style={estilos.TextoLogin}>Login</Text>
        </View>
        <ScrollView>
            <TextInput
            style={StatusEmail}
            onChangeText={value =>{SetEmail(value)}}
            keyboardType="email-address"
            placeholder="Digite seu e-mail"
            secureTextEntry={false}
            />
            <TextInput
            style={StatusPassword}
            onChangeText={value =>{SetPassword(value)}}
            keyboardType="default"
            placeholder="Digite sua senha"
            secureTextEntry={true}
            />
            <TouchableOpacity style={estilos.ContainerBotao} onPress={() => Logar()}>
                <Text style={estilos.TextoBotao}>ENTRAR</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                <Text style={estilos.TextoOutrosBotoes}>Cadastre-se</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Senha')}>
                <Text style={estilos.TextoOutrosBotoes}>Esqueci minha senha</Text>
            </TouchableOpacity>
        </ScrollView>
        </KeyboardAvoidingView>)
    }