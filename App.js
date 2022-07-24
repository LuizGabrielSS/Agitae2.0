import React from 'react';
import TelaPadrao from './src/componentes/TelaPadrao';
import Rotas from './src/telas/Login/RotaLogin';
import AuthProvider from './src/contexts/Auth';

export default function App(){
  return (
    <TelaPadrao>
      <AuthProvider>
        <Rotas/>
      </AuthProvider>
    </TelaPadrao>
    );
}