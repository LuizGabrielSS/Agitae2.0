import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Components'
import Cadastro from '../Cadastro'
import Senha from '../Senha'
import Perfil from '../Perfil'
//import Inicial from '../Inicial'

const Stack = createNativeStackNavigator();

export default function Rotas(){
    return (
        <NavigationContainer>
          <Stack.Navigator
          initialRouteName='Login'
          screenOptions={({}) => ({
          headerShown: false,
          headerBackTitleVisible: false
          })}>
            <Stack.Screen
            name="Login" 
            component={Login}/>
            <Stack.Screen
            name="Cadastro" 
            component={Cadastro}/>
          </Stack.Navigator>
          </NavigationContainer>
        );

}