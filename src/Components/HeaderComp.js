//import liraries
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import imagePath from '../constants/imagePath';
import { custom_Colors } from '../styles/colors';
import { moderateScale, textScale } from '../styles/responsiveSize';
import TextComp from './TextComp';
import FontFamily from '../styles/FontFamily';


// create a component
const HeaderComp = ({
    onPressLeft,
    leftText = '',
    isLeftImage = true,
    style = {},
    rightTextStyle = {},
    rightText = '',
    onPressRight = () => { },
    rightImage = null,
    LeftTextStyle
}) => {
    const navigation = useNavigation()
    // const { selectedTheme } = useSelector(state => state?.appSetting)



    return (
        <View style={{ ...styles.container, ...style }}>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {isLeftImage ? <TouchableOpacity
                    style={{ marginRight: moderateScale(16) }}
                    onPress={!!onPressLeft ? onPressLeft : () => navigation.goBack()}
                >
                    <Image style={{ tintColor: custom_Colors.blackColor }} source={imagePath.icBack} />
                </TouchableOpacity> : null}

                {!!leftText ? <TextComp style={{ ...styles.LeftTextStyle, ...LeftTextStyle }} text={leftText} /> : null}
            </View>

            {!!rightText ?
                <TouchableOpacity
                    onPress={onPressRight}
                >
                    <TextComp style={{ ...styles.textStyle, ...rightTextStyle }}>{rightText}</TextComp>
                </TouchableOpacity> : null}

            {!!rightImage ?
                <TouchableOpacity
                    onPress={onPressRight}
                >
                    <Image style={{ tintColor: custom_Colors.blackColor, width: moderateScale(25), height: moderateScale(25) }} source={rightImage} />
                </TouchableOpacity> : null}

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        height: moderateScale(42),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: moderateScale(16)
    },
    textStyle: {
        fontSize: textScale(16),
        fontFamily: FontFamily.medium,
    },
    LeftTextStyle: {
        fontSize: textScale(20),
        fontFamily: FontFamily.semiBold,
    }
});

//make this component available to the app
export default HeaderComp;
