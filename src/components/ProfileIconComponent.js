import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import IonIcons from 'react-native-vector-icons/Ionicons'
import { COLORS } from '../constants'
import UserImage from '../assets/images/user_test.jpg'

export default function ProfileIconComponent() {

    const [isUser, setIsUser] = useState(true)

    return (
            <TouchableOpacity
                style={styles.icon_container}
            >
                {
                    isUser 
                    ?
                    <Image
                        source={UserImage}
                        style={styles.userImage}
                    />
                        
                    :
                    <IonIcons
                        name='ios-person-circle-outline'
                        size={30}
                        color={COLORS.yellow}
                    />  
                }
                
            </TouchableOpacity>
    
    )
}

const styles = StyleSheet.create({
    icon_container:{
        // borderColor: COLORS.gray,
        // borderWidth:1,
        // backgroundColor:'blue',
        justifyContent:'center',
        // paddingTop: 5
    },
    userImage:{
        width: 35,
        height: 35,
        borderRadius: 20,
    }
})