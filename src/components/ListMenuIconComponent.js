import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'
import ButtonIconComponent from './ButtonIconComponent'

export default function ListMenuIconComponent() {
  return (
    <View
        style={styles.container}
    >
      <ButtonIconComponent name='restaurant-outline' title='ອາຫານ'/>
      <ButtonIconComponent name='trophy-outline' title='ເຄື່ອງດື່ມ'/> 
      <ButtonIconComponent name='cart-outline' title='ບີນສັ່ງອາຫານ'/>
      <ButtonIconComponent name='document-outline' title='ປະຫວັດ'/>
      <ButtonIconComponent name='ios-home-outline' title='ຈອງຕຸບ'/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: COLORS.primary,
        flexDirection:'row',
        justifyContent:'space-between',
        padding: 10,
        // backgroundColor: COLORS.secondary,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        // borderRadius: 10
    }
})