import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import VK from '../assets/images/vk.jpg'
import { COLORS, FONTS, SIZES } from '../constants'

export default function LogoComponent() {
    return (
        <View style={styles.constainer}>
            <Image
                source={VK}
                style={styles.logo_container}
            />
            <TouchableOpacity
                style={styles.title_container}
            >
                <Text style={styles.title}>ສາລາ ວີເຄ</Text>
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    constainer:{
        flexDirection:'row',
        borderColor: COLORS.yellow_dark,
        borderWidth:0.5,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    logo_container:{
        width: 30,
        height: 30,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius:2,
    },
    title_container:{
        marginLeft: 1,
        backgroundColor: COLORS.secondary,
        paddingHorizontal: 5,
        borderTopRightRadius: 2,
        borderBottomRightRadius: 10,
        justifyContent:'center'
    },
    title:{
        fontSize: SIZES.medium,
        fontWeight: 'bold',
        color: COLORS.yellow
    }
})