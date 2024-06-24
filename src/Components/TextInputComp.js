//import liraries
import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import FontFamily from '../styles/FontFamily';
import { custom_Colors } from '../styles/colors';
import { moderateScale, moderateScaleVertical, textScale } from '../styles/responsiveSize';

// create a component
const TextInputComp = ({
    value = '',
    onChangeText,
    placeholder = '',
    secureText = false,
    onPressSecure = () => { },
    inputStyle = {},
    textStyle = {},
    placeholderTextColor = custom_Colors.blackColor,
    Img,
    source,
    ImgStyle,
    ...props
}) => {

    // const { lang } = useSelector(state => state?.appSetting)

    return (
        <View style={{
            ...styles.inputStyle,
            ...inputStyle,
        }}>
            {Img && <Image source={source} style={{ ...styles.ImgStyle, ...ImgStyle }} />}
            <TextInput
                style={{
                    ...styles.textStyle,
                    ...textStyle,
                    // textAlign: lang == 'ar'? 'right': 'left'
                }}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                {...props}
            />

            {!!secureText ? <Text style={{ ...styles.textStyle, flex: 0 }} onPress={onPressSecure}>{secureText}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    inputStyle: {
        height: moderateScale(52),
        borderRadius: moderateScale(5),
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: moderateScale(16),
        alignItems: 'center',
        backgroundColor: custom_Colors.whiteColor,
        marginBottom: moderateScaleVertical(16),
        elevation: 5,
    },
    textStyle: {
        fontSize: textScale(12),
        fontFamily: FontFamily.Poppins_Regular,
        flex: 1,
        color: custom_Colors.blackColor
    },
    ImgStyle: {
        tintColor: custom_Colors.blackOpacity70,
        width: moderateScale(25),
        height: moderateScale(25)
    }
});

//make this component available to the app
export default TextInputComp;
