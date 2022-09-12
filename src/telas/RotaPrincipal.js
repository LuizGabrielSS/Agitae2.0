import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Inicial from './Inicial'
import Historico from './Historico'
import Perfil from './Perfil'
import Pesquisa from './Pesquisa'
import Carrinho from './Carrinho'

const Tab = createBottomTabNavigator();

  export default function Rotas(){

    const roxo = "#000"

    const branco = "#fff"

    const preto = "#9900cc"

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
                  iconName = focused  ? 'home': 'home-outline';
                } else if (route.name === 'Perfil') {
                  iconName = focused ? 'person' : 'person-outline';
                } else if(route.name === 'Historico'){
                  iconName = focused ? 'receipt' : 'receipt-outline';
                }else if(route.name === 'Carrinho'){
                    iconName = focused ? 'cart' : 'cart-outline';
                }else if(route.name === 'Pesquisa'){
                    iconName = focused ? 'search' : 'search-outline';
                }
                
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: roxo,
              tabBarInactiveTintColor: branco,
              tabBarActiveBackgroundColor:preto,
              tabBarInactiveBackgroundColor:preto,
            })}>
          <Tab.Screen name="Carrinho" component={Carrinho} />
          <Tab.Screen name="Historico" component={Historico} />
          <Tab.Screen name="Home" component={Inicial} />
          <Tab.Screen name="Pesquisa" component={Pesquisa} />
          <Tab.Screen name="Perfil" component={Perfil} />
          </Tab.Navigator>
    </NavigationContainer>
  }