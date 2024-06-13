import { Image, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import TextInputComp from '../../Components/TextInputComp'
import ButtonComp from '../../Components/ButtonComp'
import TextComp from '../../Components/TextComp'
import { moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize'
import FontFamily from '../../styles/FontFamily'
import { custom_Colors } from '../../styles/colors'
import imagePath from '../../constants/imagePath'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import HeaderComp from '../../Components/HeaderComp'
import navigationStrings from '../../Navigations/navigationStrings'
const Login = ({ navigation }) => {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [secureText, setSecureText] = useState(true)


    return (
        <WrapperContainer >
            <HeaderComp />
            <KeyboardAvoidingView
                style={{ flex: 1, margin: moderateScale(16) }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{ flex: 1 }} >

                        <View style={{ flex: 0.8, }}>
                            <TextComp
                                text={'Welcome back to'}
                                style={{ marginTop: moderateScaleVertical(60), fontSize: textScale(30), fontFamily: FontFamily.Poppins_Bold, color: custom_Colors.blackOpacity60 }}
                            />
                            <Image source={imagePath.CYGLoginLogo} style={styles.LogoStyle} />
                            <TextComp
                                text={'I am a fan of ContactYourGuide and a member traveler'}
                                style={{ marginVertical: moderateScaleVertical(30), fontSize: textScale(18), fontFamily: FontFamily.semiBold, color: custom_Colors.blackColor }}
                            />
                            <TextInputComp
                                placeholder='Email'
                                onChangeText={(val) => setEmail(val)}
                                value={Email}
                                inputStyle={{ marginTop: 15 }}
                                Img={true}
                                source={imagePath.MailIc}
                                ImgStyle={{ marginRight: moderateScale(5) }}
                            />
                            <TextInputComp
                                placeholder='Password'
                                onChangeText={(val) => setPassword(val)}
                                value={Password}
                                secureTextEntry={secureText}
                                secureText={secureText ? 'Show' : 'Hide'}
                                onPressSecure={() => setSecureText(!secureText)}
                                Img={true}
                                source={imagePath.LockIc}
                                ImgStyle={{ marginRight: moderateScale(5) }}
                            />
                            <TextComp
                                text={'Forget Password?'}
                                style={{ marginTop: moderateScaleVertical(5), fontSize: textScale(16), fontFamily: FontFamily.semiBold, color: custom_Colors.blueColor, textAlign: 'right' }}
                                onPress={() => navigation.navigate(navigationStrings.GET_START)}
                            />
                            <TextComp
                                onPress={() => navigation.navigate(navigationStrings.SIGNUP)}
                                text={'Register As a Travel'}
                                style={{ marginTop: moderateScaleVertical(40), fontSize: textScale(18), fontFamily: FontFamily.semiBold, color: custom_Colors.themeColor, textAlign: 'center' }}

                            />
                        </View>

                        <View style={{ flex: 0.2, justifyContent: 'flex-end', marginBottom: moderateScaleVertical(16) }}
                        >
                            <ButtonComp
                                text={'LOGIN'}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </WrapperContainer>
    )
}

export default Login

const styles = StyleSheet.create({
    LogoStyle: {
        // resizeMode: 'contain',
        width: moderateScale(200),
        height: moderateScale(40),
    }
})