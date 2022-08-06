import React, {useState, useEffect, useContext} from 'react';
import { TextInput, Text ,TouchableOpacity,ScrollView, View,KeyboardAvoidingView,Platform,Alert} from "react-native";
import estilos from './Estilos';
import {Auth} from '../../../contexts/Auth'

export default function Senha({navigation}){
    //CONSTANTES PARA VERIFICAR SE PODE LOGAR OU NÃO
    const {Usuario} = useContext(Auth)

    const {SetSenha} = useContext(Auth)

    const {Senha} = useContext(Auth)

    const [Password,SetPassword] = useState([])

    const[Email,SetEmail] = useState([])

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

    const Logar = () => {
        if(Email.length != 0){
            if(Email == Usuario){
                if(Senha.length != 0){
                    if(Password.length != 0){
                        if(Password == Senha){
                            alertComponent("Senha Modificada","Senha Modificada com sucesso", 'OK',navigation.navigate('Login'))
                        }
                        else{
                            alertComponent("Senhas não batem", "As senhas não são as mesmas","OK",fallBackToDefaultAuth())
                        }
                    }
                    else{
                        alertComponent("Campo Vazio", "Nenhum campo pode ficar vazio","OK",fallBackToDefaultAuth())
                    }
                }
                else{
                    alertComponent("Campo Vazio", "Nenhum campo pode ficar vazio","OK",fallBackToDefaultAuth())
                }
            }
            else{
                alertComponent("Campo Vazio", "Nenhum campo pode ficar vazio","OK",fallBackToDefaultAuth())
            }
        }
        else{
                    alertComponent("Campo Vazio", "Nenhum campo pode ficar vazio","OK",fallBackToDefaultAuth())
                }
    }

    //CONSTANTES DE ESTILIZAÇÃO
    const[StatusEmail,SetStatusEmail] = useState(estilos.EmailNormal)

    const[StatusPassword,SetStatusPassword] = useState(estilos.PasswordNormal)

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
                style={StatusPassword}
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