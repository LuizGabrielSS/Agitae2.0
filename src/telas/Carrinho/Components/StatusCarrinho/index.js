import React from 'react';

import { View, Text,TouchableOpacity } from 'react-native';

import estilos from './Estilos';

export default function StatusCarrinho({ total }) {
  return <View style={estilos.conteudo}>
    <View style={estilos.total}>
      <Text style={estilos.descricao}>Total do Carrinho:</Text>
      <Text style={estilos.valor}>
        {
          total
        }
      </Text>
    </View>
    <View style={estilos.botao}>
      <TouchableOpacity>
      <Text>Concluir pedido</Text>
      </TouchableOpacity>
    </View>
  </View>
}