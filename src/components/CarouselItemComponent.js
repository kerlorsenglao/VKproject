import { StyleSheet, Text, View, Dimensions,Image } from 'react-native'
import React from 'react'
import { COLORS, SIZES, FONTS } from '../constants';
import LineComponent from './LineComponent';



const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function CarouselItemComponent({image}) {
    return (
     
            <View style={styles.cardView}>
                <Image
                    source={image.image}
                    style={styles.image}
                />
                <View style={styles.textView}>
                    <Text style={styles.itemTitle}>{image.title}</Text>
                    <Text style={styles.itemDescription}>{image.description}</Text>
                </View>
            </View>
       
       
    )
}

const styles = StyleSheet.create({
    cardView:{
        width: width,
        height: height/6,
        shadowColor: '#000',
        shadowOffset: {width: 0.5,height: 0.5},
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
        borderRadius:15
    },
    textView:{
        position:'absolute',
        bottom: 10,
        margin: 10,
        left: 5,
    },
    image:{
        width: width,
        height: height/6,
        resizeMode:'stretch',
        // borderRadius:5
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