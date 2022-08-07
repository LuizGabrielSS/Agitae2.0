import React, {useState, useEffect, useContext} from 'react';
import { TextInput, Text ,TouchableOpacity,ScrollView, View,KeyboardAvoidingView,Platform,Alert} from "react-native";
import estilos from './Estilos';
import {Auth} from '../../../contexts/Auth'
import FallBack from '../../components/FallBack'
import Alerta from '../../components/Alerta'

export default function Senha({navigation}){
    //CONSTANTES PARA VERIFICAR SE PODE LOGAR OU NÃO
    const {Usuario} = useContext(Auth)

    const {SetSenha} = useContext(Auth)

    const {Senha} = useContext(Auth)

    const [Password,SetPassword] = useState([])

    const[Email,SetEmail] = useState([])

    const Logar = () => {
        if(Email.length != 0){
            if(Email == Usuario){
                if(Senha.length != 0){
                    if(Password.length != 0){
                        if(Password == Senha){
                            alertComponent("Senha Modificada","Senha Modificada com sucesso", 'OK',navigation.navigate('Login'))
                        }
                        else{
                            SetStatusPassword(estilos.InputErrada)
                            SetStatusSenha(estilos.Input)
                    SetStatusEmail(estilos.Input)
                            Alerta("Senhas não batem", "As senhas não são as mesmas","OK",FallBack())
                        }
                    }
                    else{
                        SetStatusPassword(estilos.InputErrada)
                        SetStatusSenha(estilos.Input)
                    SetStatusEmail(estilos.Input)
                        Alerta("Campo Vazio", "Nenhum campo pode ficar vazio","OK",FallBack())
                    }
                }
                else{
                    SetStatusSenha(estilos.InputErrada)
                    SetStatusEmail(estilos.Input)
                    Alerta("Campo Vazio", "Nenhum campo pode ficar vazio","OK",FallBack())
                }
            }
            else{
                SetStatusEmail(estilos.InputErrada)
                Alerta("Usuario Inexistente", "O usuario não existe no sistema","OK",FallBack())
            }
        }
        else{
            SetStatusEmail(estilos.InputErrada)
            Alerta("Campo Vazio", "Nenhum campo pode ficar vazio","OK",FallBack())
        }
    }

    //CONSTANTES DE ESTILIZAÇÃO
    const[StatusEmail,SetStatusEmail] = useState(estilos.Input)

    const[StatusSenha,SetStatusSenha] = useState(estilos.Input)

    const[StatusPassword,SetStatusPassword] = useState(estilos.Input)

    return(<KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={estilos.Container}
        >
            <View style={estilos.ContainerLogin}>
                <Text style={estilos.TextoLogin}>Mudar Senha</Text>
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
                style={StatusSenha}
                onChangeText={value =>{SetSenha(value)}}
                keyboardType="default"
                placeholder="Digite sua senha"
                secureTextEntry={true}
                />
                <TextInput
                style={StatusPassword}
                onChangeText={value =>{SetPassword(value)}}
                keyboardType="default"
                placeholder="Digite sua senha"
                secureTextEntry={true}
                />
                <TouchableOpacity style={estilos.ContainerBotao} onPress={() => Logar()}>
                    <Text style={estilos.TextoBotao}>MUDAR SENHA</Text>
                </TouchableOpacity>
            </ScrollView>
            </KeyboardAvoidingView>)
        }