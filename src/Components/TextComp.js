import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { custom_Colors } from '../styles/colors';
import { textScale } from '../styles/responsiveSize';
import FontFamily from '../styles/FontFamily';


const TextComp = ({
    text = '',
    style = {},
    children,
    ...props
}) => {
    return (
        <Text
            style={{
                ...styles.textStyle,
                ...style,
            }}
            {...props}
        >{text} {children}</Text>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: FontFamily.Poppins_Regular,
        color: custom_Colors.blackColor,
        fontSize: textScale(12),
        textAlign: 'left'
    },
});


export default TextComp;
