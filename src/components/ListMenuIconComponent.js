import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'

export default function ListMenuIconComponent() {
  return (
    <View
        style={styles.container}
    >
      <Text>ListMenuIconComponent</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: COLORS.secondary
    }
})