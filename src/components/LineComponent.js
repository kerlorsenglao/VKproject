import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'

export default function LineComponent() {
  return (
    <View style={styles.line}></View>
  )
}

const styles = StyleSheet.create({
    line:{
        backgroundColor: COLORS.yellow,
        height: 0.5,
        marginVertical: 1,
        elevation: 1000,
        zIndex: 1000
    }
})