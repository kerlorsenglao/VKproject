import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import * as Animatable from 'react-native-animatable'
import Config from 'react-native-config'

import IonIcon from 'react-native-vector-icons/Ionicons'
import Spinner from 'react-native-loading-spinner-overlay'
import { GlobalData } from '../context/GlobalContext'

import { COLORS } from '../constants'

export default function Home() {
    const {token} = useContext(GlobalData)
    const navigation = useNavigation()
    const [spiner, setSpiner] = useState(true)
    useEffect(()=>{
      setTimeout(() => {
        setSpiner(false)
      }, 1000);
    })
  return (
    <View>
      <Spinner visible={spiner}/>
      <Text>Home = {Config.TEST}</Text>
      <Animatable.Text animation="slideInDown" iterationCount={5} direction="alternate">Up and down you go</Animatable.Text>
      <IonIcon name='alarm-outline' size={50} color="black"/>
      <TouchableOpacity
        style={{
            padding: 5,
            backgroundColor: "gray"
        }}
        onPress = {()=> navigation.navigate("Detail")}
      >
        <Text> to detail</Text>
      </TouchableOpacity>
      <Text style={styles.text_color}>{token}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text_color:{
    color: COLORS.green
  }
})