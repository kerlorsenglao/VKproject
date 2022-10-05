import { SafeAreaView,Dimensions,ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Animated } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions'

import * as Animatable from 'react-native-animatable'
import Config from 'react-native-config'

import IonIcon from 'react-native-vector-icons/Ionicons'
import Spinner from 'react-native-loading-spinner-overlay'
import { GlobalData } from '../context/GlobalContext'

import { COLORS } from '../constants'
import LogoComponent from '../components/LogoComponent'
import ProfileIconComponent from '../components/ProfileIconComponent'
import SearchComponent from '../components/SearchComponent'
import LoadingComponent from '../components/LoadingComponent'
import CarouselComponent from '../components/CarouselComponent'
import LineComponent from '../components/LineComponent'
import ButtonIconComponent from '../components/ButtonIconComponent'
import ListMenuIconComponent from '../components/ListMenuIconComponent'
import ContentComponent from '../components/ContentComponent'



export default function Home() {
    const window = useWindowDimensions();
    let MAX_WIDTH = window.width;
    let MAX_HIEGTH= window.height;
    const Header_Hiegth = MAX_HIEGTH > MAX_WIDTH ? Dimensions.get('screen').height/4+40 : Dimensions.get('screen').height/5-10;
   
    const scrollY = new Animated.Value(0)
    const diffClampScrollY = Animated.diffClamp(scrollY,0,Header_Hiegth)
    const headerY = diffClampScrollY.interpolate({
        inputRange:[0,Header_Hiegth],
        outputRange:[0, MAX_HIEGTH > MAX_WIDTH ?-Header_Hiegth+60 :-Header_Hiegth+15]
    })
    return (
        <SafeAreaView style={{flex: 1,}}>
            <StatusBar
            // hidden
            // translucent={true}
            backgroundColor={COLORS.header_bg}
            />
            <LineComponent/>
            <Animated.View style={{
              position:'absolute',
              top: 0,
              right:0,
              left:0, 
              backgroundColor: 'white',
              height: Header_Hiegth, 
              zIndex:100,
              elevation: 100,
              transform: [{translateY: headerY}],
              backgroundColor: COLORS.secondary,
              paddingTop:5
              }}>
                {
                  MAX_HIEGTH > MAX_WIDTH ? <CarouselComponent/> : undefined
                }
                <SearchComponent/>
                <View style={{ paddingHorizontal: 10,}}>
                  <ListMenuIconComponent/>
                </View>
            </Animated.View>
            <View style={{backgroundColor: COLORS.secondary}}>
                <Animated.ScrollView
                    scrollEventThrottle={16}
                    bounces={false}
                    onScroll={(event)=>{
                        scrollY.setValue(event.nativeEvent.contentOffset.y)
                    }}
                    contentContainerStyle={{
                        marginTop: MAX_HIEGTH > MAX_WIDTH ? Header_Hiegth-10 :Header_Hiegth+25//10
                    }}
                >
                  <View style={{height: 170,backgroundColor: 'red', justifyContent:'center', alignItems:'center',margin:10}}>
                  <Text>RED1</Text>
                  </View>
                  <View style={{height: 170,backgroundColor: 'blue', justifyContent:'center', alignItems:'center',margin:10}}>
                      <Text>BLUE</Text>
                  </View>
                  <View style={{height: 170,backgroundColor: 'green', justifyContent:'center', alignItems:'center',margin:10}}>
                      <Text>GREEN</Text>
                  </View>
                  <View style={{height: 170,backgroundColor: 'yellow', justifyContent:'center', alignItems:'center',margin:10}}>
                      <Text>YELLOW</Text>
                  </View>
                  <View style={{height: 170,backgroundColor: 'gray', justifyContent:'center', alignItems:'center',margin:10}}>
                      <Text>GRAY</Text>
                  </View>
                  <View style={{height: 170,backgroundColor: 'pink', justifyContent:'center', alignItems:'center',margin:10}}>
                      <Text>PINK</Text>
                  </View>
                  <View style={{height: 170,backgroundColor: 'red', justifyContent:'center', alignItems:'center',margin:10}}>
                      <Text>RED</Text>
                  </View>
                  <View style={{height: 170,backgroundColor: 'blue', justifyContent:'center', alignItems:'center',margin:10}}>
                      <Text>BLUE</Text>
                  </View>
                  <View style={{height: 170,backgroundColor: 'green', justifyContent:'center', alignItems:'center',margin:10}}>
                      <Text>GREEN</Text>
                  </View>
                  <View style={{height: 170,backgroundColor: 'yellow', justifyContent:'center', alignItems:'center',margin:10}}>
                      <Text>YELLOW</Text>
                  </View>
                  <View style={{height: 170,backgroundColor: 'gray', justifyContent:'center', alignItems:'center',margin:10}}>
                      <Text>GRAY</Text>
                  </View>
                  <View style={{height: 170,backgroundColor: 'pink', justifyContent:'center', alignItems:'center',margin:10}}>
                      <Text>PINK</Text>
                  </View>
                </Animated.ScrollView>
            </View>
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  constainer:{
    // flex: 1,
    // justifyContent:'center',
    // alignItems:'center',
    backgroundColor:COLORS.secondary
  },
  text_color:{
    color: COLORS.yellow_ligth
  }
})