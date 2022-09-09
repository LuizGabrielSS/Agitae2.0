import React from 'react';
import { FlatList,ScrollView } from 'react-native';
import Data from '../../Mocks/Pesquisa';
import StatusCarrinho from './Components/StatusCarrinho';
import Card from './Components/Card';
import { Auth } from '../../contexts/Auth';

export default function Carrinho() {

  const {Total} = React.useContext(Auth)

  const {SetTotal} = React.useContext(Auth)

  const {Quantidade} = React.useContext(Auth)

  const RenderItem = ({ item }) => 
    <Card
    nome={item.nome}
    preco={item.preco}
    descricao={item.descricao}
    quantidade={Quantidade}
    autor={item.autor}
    SetTotal={SetTotal}
    Total={Total}
    />;
    
    return(
    <>
    <FlatList
    data={Data}
    renderItem={RenderItem}
    keyExtractor={item => item.id}
    />
    <StatusCarrinho total={Total}/>
    </>)
  }