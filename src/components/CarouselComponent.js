import { StyleSheet, Text, View, Dimensions, Animated,TouchableOpacity } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

import image1 from '../assets/images/img1.jpg' 
import image2 from '../assets/images/img2.jpg' 
import image3 from '../assets/images/img3.jpg' 
import image4 from '../assets/images/img4.jpg' 

import CarouselItemComponent from './CarouselItemComponent'
import { COLORS } from '../constants'
import useInterval from './Interval'


const MAX_WIDTH = Dimensions.get('screen').width;

export default function CarouselComponent() {
    const data = [
        {
            id: 1,title: 'ເຂົ້າຜັດ',description:'ເຂົ້າຜັດໝູແຊບ',image: image1
        },
        {
            id: 2,title: 'ເຂົ້າກະເພົາ',description:'ເຂົ້າກະເພົາໝູແຊບ',image: image2
        },
        {
            id: 3,title: 'ລາບງົວ',description:'ລາບງົວພື້ນບ້ານ',image: image3
        },
        {
            id: 4,title: 'ຕຳເຂົ້າປຽກ',description:'ຕຳເຂົ້າປຽກນາຍາວແຊບໆ',image: image4
        }
    ]
    const animation = useRef(new Animated.Value(0))
    const [currImage, setCurrImage] = useState(0)

    useInterval(()=>handleAnimation(),5000)

    const handleAnimation = ()=>{
        let newCurrImg = currImage + 1;
        if(newCurrImg >= data.length){
            newCurrImg = 0;
        }
        Animated.spring(animation.current, {toValue: -(MAX_WIDTH * newCurrImg), useNativeDriver: true}).start()
        setCurrImage(newCurrImg)
    }

    return (
        <View
            style={{
               elevation:4
            }}
        >
            <Animated.View style={[styles.container,{transform:[{translateX: animation.current}]}]}>
                {
                    data.map((img,index)=>(<CarouselItemComponent image={img} key={index}/>))
                }
            </Animated.View>
            <View style={styles.indicatorContainer}>
                {
                    data.map((img,index)=><View key={index} style={[styles.indicator, index === currImage ? styles.activeIndicator: undefined]}></View>)
                }
            </View>
            <TouchableOpacity
                style={styles.nextButton}
                onPress={handleAnimation}
            >
                <Ionicons
                    name='md-chevron-forward-outline'
                    size={40}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row'
    },
    indicatorContainer:{
        flexDirection: 'row',
        position: 'absolute',
        justifyContent:'center',
        alignItems:'center',
        width: MAX_WIDTH,
        bottom:5,
        zIndex: 2
    },
    indicator:{
        width: 10,
        height: 5,
        borderRadius: 7,
        borderColor: COLORS.gray_ligth,
        borderWidth:1,
        marginHorizontal: 5,
    },
    activeIndicator:{
        backgroundColor: COLORS.white
    },
    nextButton:{
        position:'absolute',
        right: 5,
        bottom: MAX_WIDTH/8,
        alignSelf:'center',
        justifyContent:'flex-end'
    }
    
})