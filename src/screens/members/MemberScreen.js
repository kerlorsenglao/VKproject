import { StyleSheet, Text, View, ScrollView, Animated, StatusBar } from 'react-native'
import React from 'react'
import SearchComponent from '../../components/SearchComponent';

const Header_Hiegth = 100;
export default function MemberScreen() {
    const scrollY = new Animated.Value(0)
    const diffClampScrollY = Animated.diffClamp(scrollY,0,Header_Hiegth)
    const headerY = diffClampScrollY.interpolate({
        inputRange:[0,Header_Hiegth],
        outputRange:[0, -Header_Hiegth+50]
    })
   

  return (
    <View style={{flex: 1}}>
        <Animated.View style={{
            position:'absolute',
            top: 0,
            right:0,
            left:0, 
            backgroundColor: 'white',
            height: Header_Hiegth, 
            zIndex:100,
            elevation: 100,
            transform: [{translateY: headerY}]
            }}>
                <View style={{justifyContent:'center',alignItems:'center',height: 50}}>
                    <Text style={{color:'black'}}>Image</Text>
                </View>
                <View style={{justifyContent:'center',alignItems:'center',height: 50}}>
                    <Text style={{color:'black'}}>Search</Text>
                    <SearchComponent/>
                </View>
                
        </Animated.View>
        <View>
            <Animated.ScrollView
                scrollEventThrottle={16}
                bounces={false}
                onScroll={(event)=>{
                    scrollY.setValue(event.nativeEvent.contentOffset.y)
                }}
                contentContainerStyle={{
                    paddingTop: Header_Hiegth
                }}
            >
                <View style={{height: 170,backgroundColor: 'red', justifyContent:'center', alignItems:'center',margin:10}}>
                    <Text>RED</Text>
                </View>
            </Animated.ScrollView>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({})