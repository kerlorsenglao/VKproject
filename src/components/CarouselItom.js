import { StyleSheet, Text, View , Dimensions, Image} from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants';

import image from '../assets/images/img1.jpg'

const { width , height } = Dimensions.get('window');

export default function CarouselItom({item}) {
    return (
        <View style={styles.cardView}>
            <Image
                source={item.image}
                style={styles.image}
            />
            <View style={styles.textView}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardView:{
        flex: 1,
        width: width - 20,
        height: height/5,
        backgroundColor: COLORS.white,
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0.5,height: 0.5},
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5
    },
    textView:{
        position:'absolute',
        bottom: 10,
        margin: 10,
        left: 5
    },
    image:{
        width: width - 20,
        height: height/5,
        borderRadius: 10,
        resizeMode:'stretch'
    },
    itemTitle:{
        color: COLORS.yellow,
        fontSize: SIZES.large,
        shadowColor: '#000',
        shadowOffset:{width:0.8,height:0.8},
        shadowOpacity: 1,
        shadowRadius: 3,
        marginBottom: 5,
        fontWeight: 'bold',
        elevation: 5
    },
    itemDescription:{
        color: COLORS.yellow,
        fontSize: SIZES.small,
        shadowColor: '#000',
        shadowOffset:{width:0.8,height:0.9},
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5
    }
})