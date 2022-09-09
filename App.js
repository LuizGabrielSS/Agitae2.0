import React from 'react';
import TelaPadrao from './src/components/TelaPadrao/index.js';
import Rotas from './src/telas/Login/RotaLogin';
import AuthProvider from './src/contexts/Auth';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export default function App(){

  return (
    <TelaPadrao>
      <AuthProvider>
        <Rotas/>
      </AuthProvider>
    </TelaPadrao>
    );
}