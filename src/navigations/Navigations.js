import { View, Text } from 'react-native'
import React, { useContext } from 'react'

import { NavigationContainer,DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Detail from '../screens/Detail';
import LogoComponent from '../components/LogoComponent';
import ProfileIconComponent from '../components/ProfileIconComponent';
import Login from '../screens/Login';
import { GlobalData } from '../context/GlobalContext';
import { COLORS } from '../constants';


const Stack = createNativeStackNavigator()
const theme ={
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.primary,
  },
}

export default function index() {

  const {token} = useContext(GlobalData)

  return (
    <NavigationContainer theme={theme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          {
            token ?
            <>
              <Stack.Screen name="Home" component={Home}
                options={{
                  headerShown: true,
                  headerStyle:{backgroundColor: COLORS.header_bg},
                  headerTitle:(props)=><LogoComponent {...props}/>,
                  headerRight:()=><ProfileIconComponent/>,
                }}
              />
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