import React from "react";
import {Text,View,Image} from "react-native";
import estilo from "./Estilos"
import Foto from "./Topo.gif"

export default function Topo() {
    return (<View>
    <Image source={Foto} resizeMode="stretch"/>
    </View>)
  }