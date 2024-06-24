//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import colors, { custom_Colors } from '../styles/colors';
import { moderateScale, textScale } from '../styles/responsiveSize';
import FontFamily from '../styles/FontFamily';

// create a component
const ButtonComp = ({
    onPress = () => { },
    text = '',
    style = {},
    leftImg = null,
    textStyle = {},
    isLoading = false
}) => {
    return (
        <TouchableOpacity
            style={{ ...styles.container, ...style }}
            onPress={onPress}
            activeOpacity={0.7}
        >

            {!!leftImg ? <Image source={leftImg} /> : <View />}


            {isLoading ? <ActivityIndicator size={'small'} color={'white'} /> : <Text style={{ ...styles.textStyle, ...textStyle }}>{text}</Text>}

            <View />

        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: custom_Colors.themeColor,
        height: moderateScale(52),
        borderRadius: moderateScale(8),
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: moderateScale(16)
    },
    textStyle: {
        fontFamily: FontFamily.Poppins_Medium,
        color: custom_Colors.whiteColor,
        fontSize: textScale(16)
    }
});

export default ButtonComp;
