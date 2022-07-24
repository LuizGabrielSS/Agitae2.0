import React from 'react';

import { FlatList,ScrollView } from 'react-native';

import StatusCarrinho from '../../componentes/StatusCarrinho';
import Item from './Item';

export default function Carrinho() {
    const total = servicos.reduce((soma, {preco, quantidade}) => soma + (preco * quantidade), 0);
  
    return <ScrollView>
      <StatusCarrinho total={total} />
      <FlatList
        data={servicos}
        renderItem={({item}) => <Item {...item}  />}
        keyExtractor={({id}) => String(id)}
      />
    </ScrollView>
  }