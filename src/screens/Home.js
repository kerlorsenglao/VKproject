import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import * as Animatable from 'react-native-animatable'
import Config from 'react-native-config'

export default function Home() {
    const navigation = useNavigation()
  return (
    <View>
      <Text>Home = {Config.TEST}</Text>
      <Animatable.Text animation="slideInDown" iterationCount={5} direction="alternate">Up and down you go</Animatable.Text>
      <TouchableOpacity
        style={{
            padding: 5,
            backgroundColor: "gray"
        }}
        onPress = {()=> navigation.navigate("Detail")}
      >
        <Text> to detail</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})