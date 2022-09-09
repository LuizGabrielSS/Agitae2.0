import React, { useState, useRef, useEffect } from "react";
import { View, FlatList, Text } from 'react-native';
import styles from './Estilos';

export default function Carrossel({ data, tempoAnimacao = 1000 }){
  const [ indice, setIndice ] = useState(0);
  const carrosselRef = useRef();

  function alteraPosicaoObjeto(){
    if(indice < data.length - 1){
      setIndice(indice + 1);
    }
    else {
      setIndice(0);
    }
  }

  useEffect(() => {
    carrosselRef.current.scrollToIndex({ index: indice })

    const intervalo = setInterval(() => {
      alteraPosicaoObjeto();
    }, tempoAnimacao)

    return () => clearInterval(intervalo);
  }, [indice])

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => (
            <View style={[styles.image,{backgroundColor: item.color}, index == data.length-1 ? { marginRight: 200 } : null]}>
            <Text style={styles.titulo}>{item.Titulo}</Text>
            <Text  style={styles.promocoes}>{item.Promocoes}</Text>
            </View>
        )}
        ref={carrosselRef}
      />
    </View>
  )
}