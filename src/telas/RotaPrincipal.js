import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FontAwesome} from '@expo/vector-icons'

import Inicial from './Inicial'
import Historico from './Historico'
import Perfil from './Perfil'
import Pesquisa from './Pesquisa'
import Carrinho from './Carrinho'

const Tab = createBottomTabNavigator();

  export default function Rotas(){

    cores.roxo = ""

    cores.branco = ""

    cores.preto = ""

    size = ""

      return <NavigationContainer
      independent={true}
      >
          <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            headerShown: false,
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Home') {
                  iconName = focused  ? 'ios-laptop': 'laptop-outline';
                } else if (route.name === 'Perfil') {
                  iconName = focused ? 'ios-body' : 'body-outline';
                } else if(route.name === 'Historico'){
                  iconName = focused ? 'ios-business' : 'ios-business-outline';
                }else if(route.name === 'Carrinho'){
                    iconName = focused ? 'ios-business' : 'ios-business-outline';
                }else if(route.name === 'Pesquisa'){
                    iconName = focused ? 'ios-business' : 'ios-business-outline';
                }
                
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: cores.roxo,
              tabBarInactiveTintColor: cores.branco,
              tabBarActiveBackgroundColor:cores.preto,
              tabBarInactiveBackgroundColor:cores.preto,
            })}>
          <Tab.Screen name="Historico" component={Historico} />
          <Tab.Screen name="Carrinho" component={Carrinho} />
          <Tab.Screen name="Home" component={Inicial} />
          <Tab.Screen name="Pesquisa" component={Pesquisa} />
          <Tab.Screen name="Perfil" component={Perfil} />
          </Tab.Navigator>
    </NavigationContainer>
  }