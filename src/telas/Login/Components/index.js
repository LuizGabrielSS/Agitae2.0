import React, {useState, useEffect, useContext} from 'react';
import { TextInput, Text ,TouchableOpacity,ScrollView, View,KeyboardAvoidingView,Platform,Alert} from "react-native";
import estilos from '../Estilos';
import {Auth} from '../../../contexts/Auth'

export default function TelaLogin({navigation}){

    //CONSTANTES DE EMAIL E LOGIN
    const[Email,SetEmail] = useState([])

    const[Password,SetPassword] = useState([])

    //CONSTANTES PARA VERIFICAR SE PODE LOGAR OU NÃO
    const {Usuario} = useContext(Auth)

    const {Senha} = useState(Auth)

    //CONSTANTES DE ESTILIZAÇÃO
    const[StatusEmail,SetStatusEmail] = useState(estilos.EmailNormal)

    const[StatusPassword,SetStatusPassword] = useState(estilos.PasswordNormal)

    const alertComponent = (title, mess, btnTxt, btnFunc) => {
    return Alert.alert(title, mess, [
      {
        text: btnTxt,
        onPress: btnFunc,
      },
    ]);
  };

  const fallBackToDefaultAuth = () => {
    console.log("Luiz Não erra");
  };

    //Função do Botao Logar
    function Logar(){
        if(Email != []){
            if(Password != []){
                if(Email == Usuario){
                    if(Password == Senha){
                        navigation.navigate('Inicial')
                    }else if(Password != Senha){
                        SetStatusPassword(estilos.PasswordErrada)
                        alertComponent("Campo Senha Errado","Senha Incorreta","OK",fallBackToDefaultAuth)
                    }
                }else if(Email != Usuario){
                    SetStatusEmail(estilos.EmailErrada)
                    alertComponent("Campo Login Errado","Usuario não encontrado","OK",fallBackToDefaultAuth)
                }
            }else{
                SetStatusPassword(estilos.PasswordVazio)
                alertComponent("Campo Login vazio","Não pode deixar campos vazios na tentativaa de login","OK",fallBackToDefaultAuth)
            }
        }else{
            SetStatusEmail(estilos.EmailVazio)
            alertComponent("Campo Login vazio","Não pode deixar campos vazios na tentativaa de login","OK",fallBackToDefaultAuth)
        }
    }

    return(<KeyboardAvoidingView
    behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
    style={estilos.Contianer}
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
            placeholderTextColor="#ffffff"
            />
            <TextInput
            style={StatusPassword}
            onChangeText={value =>{SetPassword(value)}}
            keyboardType="default"
            placeholder="Digite sua senha"
            secureTextEntry={true}
            placeholderTextColor="#ffffff"
            />
            <TouchableOpacity style={estilos.ContainerBotao} onPress={() => Logar()}>
                <Text style={estilos.TextoBotao}>ENTRAR</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('CADASTRO')}>
                <Text style={estilos.TextoOutrosBotoes}>Cadastre-se</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SENHA')}>
                <Text style={estilos.TextoOutrosBotoes}>Esqueci minha senha</Text>
            </TouchableOpacity>
        </ScrollView>
        </KeyboardAvoidingView>)
    }