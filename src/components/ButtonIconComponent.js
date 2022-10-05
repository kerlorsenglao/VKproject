import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { COLORS, SIZES } from '../constants'

export default function ButtonIconComponent({name, title}) {
  return (
    <View style={styles.buttonContainer}>
        <Ionicons
            name={name}
            size={15}
            color={COLORS.yellow}
        />
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    buttonContainer:{
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'white'
    },
    icon:{

    },
    text:{
        color: COLORS.yellow,
        fontSize: SIZES.small
    }
})