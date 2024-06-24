import React, { useState } from 'react'
import { Image, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import ButtonComp from '../../Components/ButtonComp'
import HeaderComp from '../../Components/HeaderComp'
import TextComp from '../../Components/TextComp'
import TextInputComp from '../../Components/TextInputComp'
import WrapperContainer from '../../Components/WrapperContainer'
import navigationStrings from '../../Navigations/navigationStrings'
import imagePath from '../../constants/imagePath'
import strings from '../../constants/lang'
import { saveUserData } from '../../redux/reducers/auth'
import store from '../../redux/store'
import FontFamily from '../../styles/FontFamily'
import { custom_Colors } from '../../styles/colors'
import { moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize'

const Login = ({ navigation }) => {

    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [secureText, setSecureText] = useState(true)

    const { dispatch } = store

    return (
        <WrapperContainer >
            <HeaderComp />
            <KeyboardAvoidingView
                style={{ flex: 1, margin: moderateScale(16) }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    {/* <KeyboardAwareScrollView
                bounces={true}
                height={150}
                style={{
                    padding: moderateScale(16)
                }}
                showsVerticalScrollIndicator={false}
            > */}
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 0.7 }}>
                            <TextComp
                                text={strings.WELCOME_BACK}
                                style={styles.welcome}
                            />
                            <Image source={imagePath.CYGLoginLogo} style={styles.LogoStyle} />
                            <TextComp
                                text={strings.CONTINUE_OUR_APP}
                                style={styles.member}
                            />
                            <TextInputComp
                                placeholder={strings.EMAIL}
                                onChangeText={(val) => setEmail(val)}
                                value={Email}
                                inputStyle={{ marginTop: moderateScaleVertical(20), width: '98%', alignSelf: 'center' }}
                                Img={true}
                                source={imagePath.MailIc}
                                ImgStyle={{ marginRight: moderateScaleVertical(5) }}
                            />
                            <TextInputComp
                                placeholder={strings.PASSWORD}
                                onChangeText={(val) => setPassword(val)}
                                value={Password}
                                secureTextEntry={secureText}
                                secureText={secureText ? strings.SHOW : strings.HIDE}
                                onPressSecure={() => setSecureText(!secureText)}
                                inputStyle={{ width: '98%', alignSelf: 'center' }}
                                Img={true}
                                source={imagePath.LockIc}
                                ImgStyle={{ marginRight: moderateScaleVertical(5) }}
                            />
                            <TextComp
                                text={strings.FORGOT_PASSWORD}
                                style={styles.forget}
                                onPress={() => navigation.navigate(navigationStrings.OTP_VERIFICATION)}
                            />
                            <TextComp

                                text={strings.REGISTER_AS_TRAVELER}
                                style={styles.register}
                            ><Text onPress={() => navigation.navigate(navigationStrings.SIGNUP)} style={{ color: custom_Colors.themeColor }}>{strings.SIGN_UP}</Text></TextComp>
                        </View>
                        <View style={{ flex: 0.3, marginBottom: moderateScaleVertical(10), justifyContent: 'flex-end' }}>
                            <ButtonComp
                                text={strings.LOGIN}
                                onPress={() => dispatch(saveUserData(true))}
                            />
                        </View>
                    </View>


                    {/* </KeyboardAwareScrollView> */}
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </WrapperContainer>
    )
}

export default Login

const styles = StyleSheet.create({
    LogoStyle: {
        width: moderateScale(200),
        height: moderateScale(40),
        alignSelf: 'center'
    },
    welcome: {
        marginTop: moderateScaleVertical(50),
        fontSize: textScale(28),
        fontFamily: FontFamily.Poppins_Bold,
        color: custom_Colors.blackColor
    },
    member: {
        marginVertical: moderateScaleVertical(30),
        fontSize: textScale(16),
        fontFamily: FontFamily.Poppins_Regular,
        color: custom_Colors.blackColor
    },
    forget: {
        fontSize: textScale(12),
        fontFamily: FontFamily.Poppins_SemiBold,
        color: custom_Colors.blueColor,
        textAlign: 'right'
    },
    register: {
        marginTop: moderateScaleVertical(40),
        fontSize: textScale(12),
        fontFamily: FontFamily.Poppins_SemiBold,
        color: custom_Colors.blackColor,
        textAlign: 'center'
    },
    flexBottom: {
        flex: 0.2,
        justifyContent: 'flex-end',
        marginBottom: moderateScaleVertical(16),
    }
})