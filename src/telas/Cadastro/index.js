import React, {useState, useEffect, useContext} from 'react';
import { TextInput, Text ,TouchableOpacity,ScrollView, View,KeyboardAvoidingView,Platform,Alert} from "react-native";
import estilos from './Estilos';
import {Auth} from '../../contexts/Auth'

export default function Cadastro({navigation}){
    
    const {SetUsuario} = useContext(Auth)

    const {SetSenha} = useContext(Auth)

    const {SetCelular} = useContext(Auth)

    const {SetEmail} = useContext(Auth)

    const {SetCPF} = useContext(Auth)

    const {Usuario} = useContext(Auth)

    const {Senha} = useContext(Auth)

    const {Celular} = useContext(Auth)

    const {Email} = useContext(Auth)

    const {CPF} = useContext(Auth)

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
        if(Usuario.length != 0){
            if(CPF.length != 0){
                if(Email.length != 0){
                    if(Celular.length != 0){
                        if(Senha.length != 0){
                            if(Password.length != 0){
                                if(Senha == Password){
                                    alertComponent("Cadastro Realizado","Cadastro realizado com Sucesso","OK",navigation.navigate("Login"))
                                }else{
                                    SetEstiloPassword(estilos.InputErrado)
                                    alertComponent("Senhas diferentes","As senhas não estão iguais","OK",fallBackToDefaultAuth())
                                }
                            }else{
                                SetEstiloPassword(estilos.InputErrado)
                                SetEstiloSenha(estilos.Input)
                                SetEstiloCelular(estilos.Input)
                                SetEstiloEmail(estilos.Input)
                                SetEstiloCPF(estilos.Input)
                                SetEstiloNome(estilos.Input)
                                alertComponent("Senha Vazia", "Nenhum campo pode ficar vazio","OK",fallBackToDefaultAuth())
                            }
                        }else{
                            SetEstiloSenha(estilos.InputErrado)
                            SetEstiloCelular(estilos.Input)
                            SetEstiloEmail(estilos.Input)
                            SetEstiloCPF(estilos.Input)
                            SetEstiloNome(estilos.Input)
                            alertComponent("Senha Vazia", "Nenhum campo pode ficar vazio","OK",fallBackToDefaultAuth())
                        }
                    }else{
                        SetEstiloCelular(estilos.InputErrado)
                        SetEstiloEmail(estilos.Input)
                        SetEstiloCPF(estilos.Input)
                        SetEstiloNome(estilos.Input)
                        alertComponent("Celular Vazi0", "Nenhum campo pode ficar vazio","OK",fallBackToDefaultAuth())
                    }
                }else{
                    SetEstiloEmail(estilos.InputErrado)
                    SetEstiloCPF(estilos.Input)
                SetEstiloNome(estilos.Input)
                    alertComponent("E-mail Vazio", "Nenhum campo pode ficar vazio","OK",fallBackToDefaultAuth())
                }
            }else{
                SetEstiloCPF(estilos.InputErrado)
                SetEstiloNome(estilos.Input)
                alertComponent("CPF Vazio", "Nenhum campo pode ficar vazio","OK",fallBackToDefaultAuth())
            }
        }else{
            SetEstiloNome(estilos.InputErrado)
            alertComponent("Nome Vazio", "Nenhum campo pode ficar vazio","OK",fallBackToDefaultAuth())
        }
    }

    const[EstiloNome,SetEstiloNome] = useState(estilos.Input)

    const[EstiloCPF,SetEstiloCPF] = useState(estilos.Input)

    const[EstiloEmail,SetEstiloEmail] = useState(estilos.Input)

    const[EstiloCelular,SetEstiloCelular] = useState(estilos.Input)

    const[EstiloSenha,SetEstiloSenha] = useState(estilos.Input)

    const[EstiloPassword,SetEstiloPassword] = useState(estilos.Input)

    return(<KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={estilos.Container}
        >
            <View style={estilos.ContainerLogin}>
                <Text style={estilos.TextoLogin}>Crie Seu Cadastro</Text>
            </View>
            <ScrollView>
                <View style={estilos.ContainerAcompanhante}>
                    <Text style={estilos.TituloAcompanhante}>Nome</Text>
                </View>
                <TextInput
                style={EstiloNome}
                onChangeText={value =>{SetUsuario(value)}}
                keyboardType="default"
                placeholder="Nome Completo"
                secureTextEntry={false}
                
                />
                <View style={estilos.ContainerAcompanhante}>
                    <Text style={estilos.TituloAcompanhante}>CPF</Text>
                </View>
                <TextInput
                style={EstiloCPF}
                onChangeText={value =>{SetCPF(value)}}
                keyboardType="numperpad"
                placeholder="000.000.000-00"
                secureTextEntry={false}
                
                />
                <View style={estilos.ContainerAcompanhante}>
                    <Text style={estilos.TituloAcompanhante}>E-mail</Text>
                </View>
                <TextInput
                style={EstiloEmail}
                onChangeText={value =>{SetEmail(value)}}
                keyboardType="email-address"
                placeholder="exemplo@email.com"
                secureTextEntry={false}
                
                />
                <View style={estilos.ContainerAcompanhante}>
                    <Text style={estilos.TituloAcompanhante}>Celular</Text>
                </View>
                <TextInput
                style={EstiloCelular}
                onChangeText={value =>{SetCelular(value)}}
                keyboardType="Numperpad"
                placeholder="(xx) xxxxx-xxxx"
                secureTextEntry={false}
                
                />
                <View style={estilos.ContainerAcompanhante}>
                    <Text style={estilos.TituloAcompanhante}>Senha</Text>
                </View>
                <TextInput
                style={EstiloSenha}
                onChangeText={value =>{SetSenha(value)}}
                keyboardType="default"
                placeholder="Informe a sua senha"
                secureTextEntry={false}
                
                />
                <View style={estilos.ContainerAcompanhante}>
                    <Text style={estilos.TituloAcompanhante}>Confirme a sua Senha</Text>
                </View>
                <TextInput
                style={EstiloPassword}
                onChangeText={value =>{SetPassword(value)}}
                keyboardType="default"
                placeholder="Repita a sua senha"
                secureTextEntry={false}
                
                />
                <TouchableOpacity style={estilos.ContainerBotao} onPress={() => Cadastrar()}>
                    <Text style={estilos.TextoBotao}>CADASTRAR</Text>
                </TouchableOpacity>
            </ScrollView>
            </KeyboardAvoidingView>)

}