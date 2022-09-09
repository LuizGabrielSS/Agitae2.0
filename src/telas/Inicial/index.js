import React from 'react'
import {Text,View,ScrollView, FlatList} from 'react-native'
import Carrousel from './Components/Carrousell'
import Data from '../../Mocks/Promocoes'
import Cards from './Components/Cards'
import CardsData from '../../Mocks/Perto'
import Estilos from './Estilos'

const RenderCards = ({item}) =>
<Cards
Titulo={item.titulo}
Info={item.texto}
cor={item.cor}
/>;

export default function Inicial(){
    return(
        <View style={Estilos.container}>
            <View style={Estilos.containerTitulo}>
                <Text style={Estilos.Titulo}>Bem vindo</Text>
            </View>
            <Carrousel data={Data} tempoAnimacao={2000}/>
            <View style={Estilos.ContainerPerto}>
                <Text style={Estilos.Perto}>Perto de você</Text>
            </View>
            <FlatList
            data={CardsData}
            KeyExtractor={(item) => item.id}
            renderItem={RenderCards}
            />
        </View>)
}