import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import FontFamily from '../styles/FontFamily'
import { custom_Colors } from '../styles/colors'
import { moderateScale, moderateScaleVertical, textScale } from '../styles/responsiveSize'
import TextComp from './TextComp'

const ProfileMenu = ({
    leftImage,
    rightImage,
    text
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.flexRight}>
                <Image source={leftImage} style={styles.ImgStyle} />
                <TextComp
                    text={text}
                    style={styles.textStyle}
                />
            </View>
            <Image source={rightImage} style={styles.imgLeft} />
        </View>
    )
}

export default ProfileMenu

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: moderateScale(20),
        borderRadius: 10,
        padding: moderateScale(14),
        backgroundColor: custom_Colors.whiteColor,
        marginTop: moderateScaleVertical(10),
        elevation: 1,
    },
    flexRight: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    ImgStyle: {
        tintColor: custom_Colors.gray3,
        width: moderateScale(23),
        height: moderateScale(23)
    },
    textStyle: {
        fontSize: textScale(14),
        fontFamily: FontFamily.Poppins_SemiBold,
        marginTop: moderateScaleVertical(5),
        marginLeft: moderateScaleVertical(10)
    },
    imgLeft: {
        tintColor: custom_Colors.gray3,
        width: moderateScale(23),
        height: moderateScale(23)
    }
})