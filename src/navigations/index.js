import { View, Text } from 'react-native'
import React, { useContext } from 'react'

import { NavigationContainer,} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Detail from '../screens/Detail';
import Login from '../screens/Login';
import { GlobalData } from '../context/GlobalContext';


const Stack = createNativeStackNavigator()

export default function index() {

  const {token} = useContext(GlobalData)

  return (
    <NavigationContainer>
        <Stack.Navigator>
          {
            token ?
            <>
              <Stack.Screen name="Home" component={Home}/>
              <Stack.Screen name="Detail" component={Detail}/>
            </>
            :
            <>
              <Stack.Screen name="Login" component={Login}/>
            </>
          }
        </Stack.Navigator>
    </NavigationContainer>
  )
}