import React from 'react';
import { SafeAreaView, StatusBar, KeyboardAvoidingView, Platform } from 'react-native';
import estilos from './Estilos'
import Topo from '../Topo'

export default function TelaPadrao({ children }) {
    return <>
      <SafeAreaView style={estilos.ajusteTela}>
        <StatusBar style={estilos.ajusteTela} />
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={estilos.preencher}>
            <Topo/>
            {children}
          </KeyboardAvoidingView>
        </SafeAreaView>
      <SafeAreaView style={estilos.ajusteTelaBaixo} />
    </>
  }