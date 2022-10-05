import { StyleSheet, Text, TextInput, View, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../constants'
import Ionicons from 'react-native-vector-icons/Ionicons'


export default function SearchComponent() {
    const [showCancel, setShowCancel] = useState(false)
    const [text,setText] = useState('');
    const [textshow,setTextshow] =useState('');

    const onSearchEnter=(text)=>{
        console.log('text=>',text)
    }
    
    return (
        <>
            <View style={styles.input_container}>
            <Ionicons
                name='search-circle-sharp'
                size={26}
                color= {COLORS.gray}
            />
            <TextInput
                value={text}
                inlineImageLeft='search_icon'
                placeholder='ຊອກຫາ'
                style={styles.input}
                onChangeText ={(text)=>setText(text)}
                onEndEditing={()=>onSearchEnter(text)}
            />
            <TouchableOpacity
                style={styles.cancel_icon}
                onPress = {()=>setText("")}
            >
                {
                    text.trim().length > 0 
                    ?
                    <Ionicons
                        name='close-circle-sharp'
                        size={18}
                        color={COLORS.gray}
                    
                    />
                    :null
                }
            </TouchableOpacity>
        </View>
        {/* <Text style={{color:COLORS.white}}>{textshow}</Text> */}
        </>
    )
}

const styles = StyleSheet.create({
    input_container:{
        flexDirection:'row',
        marginTop: 8,
        marginBottom: 8,
        backgroundColor: COLORS.primary,
        borderRadius: 15,
        alignItems:'center',
        marginHorizontal: 10,
        paddingLeft:2,
        // width: search_width
    },
    input:{
        paddingVertical:1,
        width: '86%'
    },
    cancel_icon:{
        // marginRight: 10
    }
})