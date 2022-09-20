import { View, Text } from 'react-native'
import React from 'react'

import {GlobalContextProvider} from './src/context/GlobalContext'
import Navigations from './src/navigations/Navigations'

export default function App() {
  return (
    <GlobalContextProvider>
      <Navigations/>
    </GlobalContextProvider>
  )
}