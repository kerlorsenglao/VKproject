import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { COLORS } from '../constants'

export default function Login() {
  return (
    <View style={styles.contianer}>
      <Text style={styles.text}>Login</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  contianer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    color: COLORS.black
  }
})