import React, {useState, useEffect, useContext} from 'react';
import {View,FlatList,Text} from "react-native";
import { SearchBar } from "react-native-elements";
import Estilos from './Estilos'
import Vazio from './Components/Vazio'
import Cards from './Components/Cards'
import Data from '../../Mocks/Pesquisa'

export default function Pesquisa(){

    const[Base,SetBase] = useState(Data)

    const[searchValue,setseachValue] = useState([])

    const searchFunction = (text) => {
        const updatedData = Data.filter((item) => {
			const text_data = text.toUpperCase();
			const item_data = `${item.nome.toUpperCase()})`;
		return item_data.indexOf(text_data) > -1;
		});
		SetBase(updatedData)
		setseachValue(text)
	};

    const renderItem = ({item}) =>
    <Cards
    nome={item.nome}
    descricao={item.descricao}
    preco={item.preco}
    autor={item.autor}
    cor={item.cor}
    />;

    return(
        <View style={Estilos.Container}>
            <SearchBar
					placeholder="Pesquisar"
					darkTheme
					round
					value={searchValue}
					onChangeText={(text) => searchFunction(text)}
					autoCorrect={false}
					/>
            <FlatList
            ListEmptyComponent={Vazio(searchValue)}
            data={Base}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            />
        </View>
    )
}