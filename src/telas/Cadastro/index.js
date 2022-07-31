import React, {useState, useEffect, useContext} from 'react';
import { TextInput, Text ,TouchableOpacity,ScrollView, View,KeyboardAvoidingView,Platform,Alert} from "react-native";
import estilos from './Estilos';
import {Auth} from '../../../contexts/Auth'

export default function Cadastro({navigation}){
    
    const {SetUsuario} = useContext(Auth)

    const {SetSenha} = useState(Auth)

    const {SetCelular} = useState(Auth)

    const {SetEmail} = useState(Auth)

    const {SetCPF} = useState(Auth)

    const {Usuario} = useContext(Auth)

    const {Senha} = useState(Auth)

    const {Celular} = useState(Auth)

    const {Email} = useState(Auth)

    const {CPF} = useState(Auth)

    const[Password,SetPassword] = useState([])

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

    const Cadastrar = () => {
        if(Usuario != []){
            if(CPF != []){
                if(Email != []){
                    if(Celular != []){
                        if(Senha != []){
                            if(Password != []){
                                if(Senha == Password){
                                    alertComponent("Cadastro Realizado","Cadastro realizado com Sucesso","OK",navigation.navigate("Login"))
                                }else{
                                    alertComponent("Senhas diferentes","As senhas não estão iguais","OK",fallBackToDefaultAuth())
                                }
                            }else{
                                alertComponent("Senha Vazia", "Nenhum campo pode ficar vazio","OK",fallBackToDefaultAuth())
                            }
                        }else{
                            alertComponent("Senha Vazia", "Nenhum campo pode ficar vazio","OK",fallBackToDefaultAuth())
                        }
                    }else{
                        alertComponent("Celular Vazi0", "Nenhum campo pode ficar vazio","OK",fallBackToDefaultAuth())
                    }
                }else{
                    alertComponent("E-mail Vazio", "Nenhum campo pode ficar vazio","OK",fallBackToDefaultAuth())
                }
            }else{
                alertComponent("CPF Vazio", "Nenhum campo pode ficar vazio","OK",fallBackToDefaultAuth())
            }
        }else{
            alertComponent("Nome Vazio", "Nenhum campo pode ficar vazio","OK",fallBackToDefaultAuth())
        }
    }

    return(<KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={estilos.Contianer}
        >
            <View style={estilos.ContainerLogin}>
                <Text style={estilos.TextoLogin}>Crie Seu Cadastro</Text>
            </View>
            <ScrollView>
                <View style={estilos.ContainerAcompanhante}>
                    <Text style={estilos.TituloAcompanhante}>Nome</Text>
                </View>
                <TextInput
                style={estilos.Input}
                onChangeText={value =>{SetUsuario(value)}}
                keyboardType="default"
                placeholder="Nome Completo"
                secureTextEntry={false}
                placeholderTextColor="#ffffff"
                />
                <View style={estilos.ContainerAcompanhante}>
                    <Text style={estilos.TituloAcompanhante}>CPF</Text>
                </View>
                <TextInput
                style={estilos.Input}
                onChangeText={value =>{SetCPF(value)}}
                keyboardType="numperpad"
                placeholder="000.000.000-00"
                secureTextEntry={false}
                placeholderTextColor="#ffffff"
                />
                <View style={estilos.ContainerAcompanhante}>
                    <Text style={estilos.TituloAcompanhante}>E-mail</Text>
                </View>
                <TextInput
                style={estilos.Input}
                onChangeText={value =>{SetEmail(value)}}
                keyboardType="email-address"
                placeholder="exemplo@email.com"
                secureTextEntry={false}
                placeholderTextColor="#ffffff"
                />
                <View style={estilos.ContainerAcompanhante}>
                    <Text style={estilos.TituloAcompanhante}>Celular</Text>
                </View>
                <TextInput
                style={estilos.Input}
                onChangeText={value =>{SetCelular(value)}}
                keyboardType="Numperpad"
                placeholder="(xx) xxxxx-xxxx"
                secureTextEntry={false}
                placeholderTextColor="#ffffff"
                />
                <View style={estilos.ContainerAcompanhante}>
                    <Text style={estilos.TituloAcompanhante}>Senha</Text>
                </View>
                <TextInput
                style={estilos.Input}
                onChangeText={value =>{SetSenha(value)}}
                keyboardType="default"
                placeholder="Informe a sua senha"
                secureTextEntry={false}
                placeholderTextColor="#ffffff"
                />
                <View style={estilos.ContainerAcompanhante}>
                    <Text style={estilos.TituloAcompanhante}>Confirme a sua Senha</Text>
                </View>
                <TextInput
                style={estilos.Input}
                onChangeText={value =>{SetPassword(value)}}
                keyboardType="default"
                placeholder="Repita a sua senha"
                secureTextEntry={false}
                placeholderTextColor="#ffffff"
                />
                <TouchableOpacity style={estilos.ContainerBotao} onPress={() => Cadastrar()}>
                    <Text style={estilos.TextoBotao}>ENTRAR</Text>
                </TouchableOpacity>
            </ScrollView>
            </KeyboardAvoidingView>)

}