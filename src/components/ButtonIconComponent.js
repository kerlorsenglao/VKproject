import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { COLORS } from '../constants'

export default function ButtonIconComponent({name}) {
  return (
    <View style={styles.buttonContainer}>
        <Ionicons
            name={name}
            size={20}
            color={COLORS.yellow}
        />
      <Text style={styles.text}>ເມນູ</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    buttonContainer:{
        justifyContent:'center',
        alignItems:'center',
        
    },
    icon:{

    },
    text:{
        color: COLORS.yellow
    }
})