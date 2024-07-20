import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import imagePath from '../constants/imagePath';
import FontFamily from '../styles/FontFamily';
import { custom_Colors } from '../styles/colors';
import { moderateScale, textScale } from '../styles/responsiveSize';
import TextComp from './TextComp';

const HeaderComp = ({
    onPressLeft,
    leftText = '',
    isLeftImage = true,
    style = {},
    rightTextStyle = {},
    rightText = '',
    onPressRight = () => { },
    rightImage = null,
    LeftTextStyle,
    centerText,
    centerTextStyle,
    rightStyle,LeftImagStyle
}) => {
    const navigation = useNavigation()

    return (
        <View style={{ ...styles.container, ...style }}>
            <View style={styles.LeftSide}>
                {isLeftImage ? <TouchableOpacity
                    style={{ ...styles.LeftImagStyle, ...LeftImagStyle }}
                    onPress={!!onPressLeft ? onPressLeft : () => navigation.goBack()}>
                    <Image style={{ tintColor: custom_Colors.blackOpacity60, width: 22, height: 22 }} source={imagePath.BackIc} />
                </TouchableOpacity> : null}
                {!!leftText ? <TextComp style={{ ...styles.LeftTextStyle, ...LeftTextStyle }} text={leftText} /> : null}
            </View>
            {!!centerText ? <TextComp style={{ ...styles.centerTextStyle, ...centerTextStyle }} text={centerText} /> : null}
            {!!rightText ?
                <TouchableOpacity
                    onPress={onPressRight}>
                    <TextComp style={{ ...styles.textStyle, ...rightTextStyle }}>{rightText}</TextComp>
                </TouchableOpacity> : null}
            {!!rightImage ?
                <TouchableOpacity onPress={onPressRight} >
                    <Image style={{ ...styles.rightStyle, ...rightStyle }} source={rightImage} />
                </TouchableOpacity> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: moderateScale(42),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: moderateScale(10)
    },
    textStyle: {
        fontSize: textScale(16),
        fontFamily: FontFamily.Poppins_Medium,
    },
    LeftTextStyle: {
        fontSize: textScale(20),
        fontFamily: FontFamily.Poppins_SemiBold,
    },
    centerTextStyle: {
        fontSize: textScale(18),
        fontFamily: FontFamily.Poppins_SemiBold,
    },
    rightStyle: {
        tintColor: custom_Colors.themeColor,
        width: 22,
        height: 22
    },
    LeftImagStyle: {
        padding: 8,
        borderRadius: 20,
        backgroundColor: '#F7F7F9'
    },
    LeftSide: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
});

export default HeaderComp;
