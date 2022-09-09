import React, {useState, useEffect, useContext} from 'react';
import {TouchableOpacity,Text,View} from "react-native";
import styles from './Estilos'

export default function Item({nome,descricao,preco,autor,cor}){

    const[expandir,SetExpandir] = useState(false);

    function ExpandirInfor(){
        SetExpandir(!expandir)
    }

    return(<>
        <TouchableOpacity style={[styles.Container,{backgroundColor:cor}]} onPress={() => ExpandirInfor()}>
            <Text style={styles.Nome}>{nome}</Text>
        </TouchableOpacity>
        {expandir && 
        <View style={styles.ContainerDescricao}>
            <Text style={styles.Descricao}>Descrição: {descricao}</Text>
            <Text style={styles.Preco}>Preço:R$ {preco}</Text>
            <Text style={styles.Autor}>Autor: {autor}</Text>
        </View>
    }
    </>
    )
}