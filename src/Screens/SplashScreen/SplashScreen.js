import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import imagePath from '../../constants/imagePath'
import { moderateScale } from '../../styles/responsiveSize'
import { custom_Colors } from '../../styles/colors'

const SplashScreen = () => {
    return (
        <View style={styles.SplashContainer}>
            <Image source={imagePath.CYGLogo} style={styles.LogoStyle} />
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    SplashContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: custom_Colors.whiteColor
    },
    LogoStyle: {
        resizeMode: 'contain',
        width: moderateScale(315),
        height: moderateScale(315)
    }
})