//import liraries
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import imagePath from '../constants/imagePath';
import { custom_Colors } from '../styles/colors';
import { moderateScaleVertical, textScale } from '../styles/responsiveSize';
import FontFamily from '../styles/FontFamily';


// create a component
const LeftTextRightImage = ({
    onPress = () => { },
    isSelected,
    text = '',
    image = imagePath.icUnchek
}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={styles.horizontalView}
            onPress={onPress}
        >
            <Text style={{
                ...styles.langTextStyle,
                color: isSelected ? custom_Colors.redColor : custom_Colors.blackColor
            }}>{text}</Text>
            <Image style={{ tintColor: isSelected ? custom_Colors.redColor : custom_Colors.gray2 }} source={image} />
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    langTextStyle: {
        fontFamily: FontFamily.semiBold,
        color: custom_Colors.blackColor,
        fontSize: textScale(14),
        textTransform: 'capitalize',
        marginVertical: moderateScaleVertical(8)
    },
    horizontalView: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

//make this component available to the app
export default LeftTextRightImage;
