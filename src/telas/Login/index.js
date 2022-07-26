import React, {useState, useEffect, useContext} from 'react';
import { TextInput, Text ,TouchableOpacity,ScrollView, View,KeyboardAvoidingView,Platform, ImageBackground,Alert} from "react-native";
import estilos from './Estilos';
import {Auth} from '../../contexts/Auth'
import * as LocalAuthentication from "expo-local-authentication";
import { Ionicons } from "@expo/vector-icons";

export default function TelaLogin({navigation}){
    
    const [isBiometricSupported, setIsBiometricSupported] = useState(false);

    useEffect(() => {
        (async () => {
        const compatible = await LocalAuthentication.hasHardwareAsync();
        setIsBiometricSupported(compatible);
        })();
    });

    const fallBackToDefaultAuth = () => {
        console.log("fall back to password authentication");
    };

    const alertComponent = (title, mess, btnTxt, btnFunc) => {
        return Alert.alert(title, mess, [
        {
            text: btnTxt,
            onPress: btnFunc,
        },
        ]);
    };
    const handleBiometricAuth = async () => {
        // Verifique se o hardware suporta biometria
        const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();

        // Fallback para o método de autenticação padrão (senha) se a impressão digital não estiver disponível
        if (!isBiometricAvailable)
            return alertComponent(
            "Please enter your password",
            "Biometric Authentication not supported",
            "OK",
            () => fallBackToDefaultAuth()
            );
        // Verifique os tipos de biometria disponíveis (impressão digital, reconhecimento facial, reconhecimento de íris)
        let supportedBiometrics;
        if (isBiometricAvailable)
            supportedBiometrics = await LocalAuthentication.supportedAuthenticationTypesAsync();

        // Verifique se os dados biométricos são salvos localmente no dispositivo do usuário
        const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
        if (!savedBiometrics)
            return alertComponent(
            "Biometric record not found",
            "Please login with your password",
            "OK",
            () => fallBackToDefaultAuth()
            );
        if(Mensagem == "1"){
            // Autentica o uso com biometria (impressão digital, reconhecimento facial, reconhecimento de íris)
            const biometricAuth = await LocalAuthentication.authenticateAsync({
                promptMessage: "Login with Biometrics",
                cancelLabel: "Cancel",
                disableDeviceFallback: true,
            });
            // Faça o login do usuário em caso de sucesso
            if (biometricAuth){
                alertComponent(
                    "Seja Bem - Vindo",
                    "A Autenticação biometrica deu o resultado positivo",
                    "LOGAR",
                    () => navigation.navigate('Home')
                    );
            };
        }
        else if(Mensagem == 0){
            isBiometricSupported == false;
        }
    };

    //CONSTANTES DE EMAIL E LOGIN
    const[Email,SetEmail] = useState([])

    const[Senha,SetSenha] = useState([])

    const {SetUsuario} = useContext(Auth)
    //CONSTANTES DE ESTILIZAÇÃO
    const[StatusEmail,SetStatusEmail] = useState(estilos.EmailNormal)

    const[StatusSenha,SetStatusSenha] = useState(estilos.SenhaNormal)

    //Função do Botao Logar

    function Logar(){
        
    }

    return(<KeyboardAvoidingView
    behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
    style={estilos.Contianer}
    >
        <View style={estilos.ContainerLogin}>
            <Text style={estilos.TextoLogin}>Login</Text>
        </View>
        {isBiometricSupported ? (
        <TouchableOpacity style={estilos.fingerWorking} onPress={handleBiometricAuth}>
            <Ionicons name="finger-print" size={44} color="white" />
        </TouchableOpacity>
        ) : (
        <TouchableOpacity style={estilos.finger}>
            <Ionicons name="finger-print" size={44} color="white" />
        </TouchableOpacity>
        )}
        <ScrollView>
            <TextInput
            style={StatusEmail}
            onChangeText={value =>{SetEmail(value),SetUsuario(value)}}
            keyboardType="email-address"
            placeholder="Digite seu e-mail"
            secureTextEntry={false}
            placeholderTextColor="#ffffff"
            />
            <TextInput
            style={StatusSenha}
            onChangeText={value =>{SetSenha(value)}}
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