import React, { useContext} from 'react';
import { Text ,TouchableOpacity,ScrollView, View,Image,Modal} from "react-native";
import estilos from './Estilos';
import {Auth} from '../../contexts/Auth'
import FallBack from '../../components/FallBack'
import Alerta from '../../components/Alerta'

export default function Perfil({navigation}){

    const [showModal, setShowModal] = useState(false);

    const [showCamera, setShowCamera] = useState(false);

    const OpenModal = () => {
        setShowModal(!showModal)
    }

    const OpenCamera = () => {
        setShowCamera(!showCamera)
    }

    const {Usuario} = useContext(Auth)

    const {Celular} = useContext(Auth)

    const {Email} = useContext(Auth)

    const {CPF} = useContext(Auth)

    const {Foto} = useContext(Auth)

    return(
        <ScrollView style={estilos.Container}>
            <TouchableOpacity style={estilos.BotaoLogOut} onPress={() => navigation.navigate('Login')}>
                <Text style={estilos.LogOut}>LogOut</Text>
            </TouchableOpacity>
            <TouchableOpacity style={estilos.ContainerFoto} onPress={() => OpenCamera()}>
                <Image source={{uri:{Foto}}}/>
                colocar icone da camera aqui
            </TouchableOpacity>
            <View style={estilos.ContainerNome}>
                <Text style={estilos.Nome}>{Usuario}</Text>
            </View>
            <TouchableOpacity style={estilos.ContainerData}  onPress={() => OpenCamera()}>
                <Text style={estilos.Data}>Meus Dados</Text>
                colocar icone do lapis aqui
            </TouchableOpacity>
            <View style={estilos.ContainerDados}>
                <Text style={estilos.NomeDado}>CPF:</Text>
                <Text style={estilos.Dado}>{CPF}</Text>
            </View>
            <View style={estilos.ContainerDados}>
                <Text style={estilos.NomeDado}>Celular:</Text>
                <Text style={estilos.Dado}>{Celular}</Text>
            </View>
            <View style={estilos.ContainerDados}>
                <Text style={estilos.NomeDado}>Email:</Text>
                <Text style={estilos.Dado}>{Email}</Text>
            </View>
            <TouchableOpacity style={estilos.BotaoRedefinirSenha} onPress={() => navigation.navigate('Senha')}>
                <Text style={estilos.RedefinirSenha}>Redefinir Senha</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}