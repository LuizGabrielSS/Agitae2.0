import React, { useState } from 'react';
import { View, Text, ScrollView,TouchableOpacity } from 'react-native';
import estilos from './Estilos';

export default function Item({nome, preco, descricao, quantidade, autor,SetTotal,Total}) {

  const[Quantos, SetQuantos] = useState(quantidade)

  const[custo, SetCusto] = useState(preco*Quantos)

  function Adicionar(){
    SetQuantos(Quantos+1)
    SetCusto(preco*Quantos)
    SetTotal(Total+custo)
  }

    return(
      <View style={estilos.Container}>
        <View style={estilos.Containernome}>
            <Text style={estilos.nome}>{nome}</Text>
          </View>
        <View style={estilos.ContainerPrecoDescricao}>
          <View style={estilos.ContainerPreco}>
            <Text  style={estilos.Fixo}>Preço</Text>
            <Text style={estilos.Preco}>{preco}</Text>
          </View>
          <View style={estilos.Containerdescricao}>
            <Text  style={estilos.Fixo}>Descrição</Text>
            <Text style={estilos.descricao}>{descricao}</Text>
          </View>
        </View>
        <View style={estilos.ContainerQuantidade}>
          <Text style={estilos.quantidade}>{Quantos}</Text>
        </View>
        <View  style={estilos.Containerautor}>
          <Text  style={estilos.Fixo}>Autor</Text>
          <Text style={estilos.autor}>{autor}</Text>
        </View>
        <View  style={estilos.ContainerCusto}>
          <Text  style={estilos.Fixo}>Custo</Text>
          <Text style={estilos.Custo}>{custo}</Text>
        </View>
        <View style={estilos.Botoes}>
          <TouchableOpacity style={estilos.BotaoAdicionar} onPress={() => Adicionar()}>
            <Text style={estilos.Adicionar}>Adicionar</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={estilos.BotaoRemover}>
            <Text style={estilos.Remover}>Remover</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }