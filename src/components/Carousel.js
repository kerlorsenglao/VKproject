import { StyleSheet, Text, View, Dimensions,Animated, FlatList } from 'react-native'
import React, { useState } from 'react'
import * as Animatable from 'react-native-animatable'

import CarouselItom from './CarouselItom';
import image1 from '../assets/images/img1.jpg' 
import image2 from '../assets/images/img2.jpg' 
import image3 from '../assets/images/img3.jpg' 
import image4 from '../assets/images/img4.jpg' 


const {width,height} = Dimensions.get('window');
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
    // {
    //     id: 4,title: 'ຕຳເຂົ້າປຽກ',description:'ຕຳເຂົ້າປຽກນາຍາວແຊບໆ',image: image4
    // }
]
export default function Carousel() {
    const [] = useState();
    let scrollX = new Animated.Value(0)
    let position = Animated.divide(scrollX,width)
    if( data && data.length){
        return (
            <View>
                <FlatList
                    data={data}
                    keyExtractor={(item,index)=>'key'+index}
                    horizontal
                    pagingEnabled
                    snapToAlignment='center'
                    scrollEventThrottle={20}
                    decelerationRate={"fast"}
                    showsHorizontalScrollIndicator={false}
                    renderItem ={({item})=>{
                        return <CarouselItom item={item}/>
                    }}
                    // onScroll ={Animated.event(
                    //     [{nativeEvent: {contentOffset:{x: scrollX}}}]
                    // )}
                    onScroll ={
                        [{nativeEvent: {contentOffset:{x: scrollX}}}]}
                />
                <View style={styles.dotView}>
                    {
                        data.map((_,i)=>{
                            let opacity = position.interpolate({
                                inputRange: [i-1,i,i+1],
                                outputRange: [0.3,1,0.3],
                                extrapolate:'clamp'
                            })
                            return (
                                <Animatable.View
                                    key={i}
                                    style = {{opacity, height: 4,width: 10, backgroundColor:'gray',margin: 4, borderRadius: 5}}
                                >
                                </Animatable.View>
                            )
                        })
                    }
                </View>
            </View>
        )
    }
    return null
}

const styles = StyleSheet.create({
    dotView:{
        flexDirection:'row',
        justifyContent:'center'
    }
})