import { Dimensions, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants';
import ListMenuIconComponent from './ListMenuIconComponent';

const MAX_HIET = Dimensions.get('screen').height;
export default function ContentComponent() {
    return (
        <View
            style={styles.container}
        >
            <ListMenuIconComponent/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height: MAX_HIET,
        backgroundColor: COLORS.secondary,
        borderTopRightRadius:25,
        borderTopLeftRadius: 25,
        paddingTop: 10,
        paddingHorizontal:10
    }
})