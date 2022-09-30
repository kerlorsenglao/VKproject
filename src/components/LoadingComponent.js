import { StyleSheet, Text, View, ActivityIndicator,Dimensions } from 'react-native'
import React from 'react'
import Lottie from 'lottie-react-native';
import loading from '../assets/images/loading6.json'
import Spinner from 'react-native-loading-spinner-overlay/lib';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function LoadingComponent({visible}) {
    return (
            <Spinner visible={visible} size='large' customIndicator={<Lottie source={loading} autoPlay loop style={{zIndex:1,width: 40}}/>}/>
    )
}

const styles = StyleSheet.create({})