import React, {useState, useContext} from 'react';
import { TextInput, Text ,TouchableOpacity,ScrollView, View,KeyboardAvoidingView,Platform,Alert} from "react-native";
import Users from ''
import estilos from './Estilos'

export default function Inicial(){
    return(
        <ScrollView style={estilos.Container}>
    <View>
        <Text>AQUI SERA O CARROUSEL COM AS PROMOÇÕES</Text>
    </View>
    </ScrollView>
    )
}