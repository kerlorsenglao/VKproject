import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
// import Carousel from 'react-native-reanimated-carousel';

import image1 from '../assets/images/img1.jpg' 
import image2 from '../assets/images/img2.jpg' 
import image3 from '../assets/images/img3.jpg' 
import image4 from '../assets/images/img4.jpg' 

export default function CarouselComponent() {
    const width = Dimensions.get('window').width;
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
    return (
            <View style={{ flex: 1 }}>
                <Text>Testing Carousel</Text>
            </View>
    )
}

const styles = StyleSheet.create({})