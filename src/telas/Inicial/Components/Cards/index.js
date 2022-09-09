import React from 'react'
import {Text,View,ScrollView} from 'react-native'
import Estilos from './Estilos'

export default function Cards({Titulo,Info,cor}){
    return(
        <View style={Estilos.container}>
            <View style={[Estilos.ContainerTitulo,{backgroundColor:cor}]}>
                <Text style={[Estilos.Titulo]}>{Titulo}</Text>
            </View>
            <View style={Estilos.ContainerInfo}>
                <Text style={Estilos.Info}>{Info}</Text>
            </View>
        </View>
    )
}
