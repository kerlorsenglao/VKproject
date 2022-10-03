import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

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

// let MAX_WIDTH = Dimensions.get('screen').width;
// let MAX_HIEGTH= Dimensions.get('screen').height;

export default function Home() {
    let MAX_WIDTH = Dimensions.get('screen').width;
    let MAX_HIEGTH= Dimensions.get('screen').height;
    
    const {token} = useContext(GlobalData)
    const navigation = useNavigation()
    const [spiner, setSpiner] = useState(true)
    useEffect(()=>{
      
    },[MAX_HIEGTH,MAX_WIDTH])
    return (
        <SafeAreaView>
            <StatusBar
            // hidden
            // translucent={true}
            backgroundColor={COLORS.header_bg}
            />
            {/* <LoadingComponent visible={true}/> */}
            <LineComponent/>
            <ScrollView>
                {
                  MAX_HIEGTH >MAX_WIDTH ? <CarouselComponent/> : null
                }
                <SearchComponent/>
            </ScrollView>
        </SafeAreaView>
    // <View style={styles.constainer}>
    //   <StatusBar
    //     // hidden
    //     translucent={true}
    //     backgroundColor={COLORS.primary}
    //   />
    //   <Spinner visible={spiner}/>
    //   <Text>Home = {Config.TEST}</Text>
    //   <Animatable.Text animation="slideInDown" iterationCount={5} direction="alternate">Up and down you go</Animatable.Text>
    //   <IonIcon name='alarm-outline' size={50} color="black"/>
    //   <TouchableOpacity
    //     style={{
    //         padding: 5,
    //         backgroundColor: COLORS.green
    //     }}
    //     onPress = {()=> navigation.navigate("Detail")}
    //   >
    //     <Text style={{color: COLORS.white}}>76.35</Text>
    //   </TouchableOpacity>
    //   <View style={{backgroundColor: COLORS.secondary, padding:20}}>
    //   <Text style={{color: COLORS.yellow_ligth}}>{token}</Text>
    //   </View>
    //   <Text style={{color: COLORS.green}}>{token}</Text>
    //   <Text style={{color: COLORS.gray_ligth}}>gray light</Text>
    //   <Text style={{color: COLORS.red}}>red</Text>
    // </View>
  )
}

const styles = StyleSheet.create({
  constainer:{
    // flex: 1,
    // justifyContent:'center',
    // alignItems:'center',
    backgroundColor:COLORS.primary
  },
  text_color:{
    color: COLORS.yellow_ligth
  }
})