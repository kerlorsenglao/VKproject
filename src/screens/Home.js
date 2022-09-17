import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Home() {
    const navigation = useNavigation()
  return (
    <View>
      <Text>Home</Text>
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