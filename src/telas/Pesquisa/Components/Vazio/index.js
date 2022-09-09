import React from 'react'
import {View, Text} from 'react-native'
import styles from './Estilos'

const Vazio = (nome) => {
	return (<View style={styles.ContainerVazio}>
		<Text style={styles.Vazio}>Esta procurando corretamente?</Text>
		<Text style={styles.Vazio}>Dados digitados:</Text>
		<Text style={styles.VazioNome}>{nome}</Text>
	</View>)
}

export default Vazio