import React, { useEffect, useRef, useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import OTPTextView from 'react-native-otp-textinput';
import ButtonComp from '../../Components/ButtonComp';
import HeaderComp from '../../Components/HeaderComp';
import ModalComp from '../../Components/ModalComp';
import TextComp from '../../Components/TextComp';
import TextInputComp from '../../Components/TextInputComp';
import WrapperContainer from '../../Components/WrapperContainer';
import navigationStrings from '../../Navigations/navigationStrings';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import FontFamily from '../../styles/FontFamily';
import { custom_Colors } from '../../styles/colors';
import { moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize';


const Otp = ({ navigation }) => {

    const [otpInput, setOtpInput] = useState("");
    const [isVisible, setIsVisible] = useState(false)
    const [Password, setPassword] = useState('')
    const [CPassword, setCPassword] = useState('')
    const [secureText, setSecureText] = useState(true)

    useEffect(() => {
        if (otpInput?.length == 6) {
            setIsVisible(true)
            setOtpInput('')
        }
    }, [otpInput])

    const input = useRef(null)

    const handleCellTextChange = async (text, i) => {

    };
    return (
        <WrapperContainer>
            <HeaderComp />
            <KeyboardAvoidingView
                style={{ flex: 1, margin: moderateScale(16) }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 0.8 }}>
                            <TextComp
                                text={'OTP Verification'}

                                style={{ marginTop: moderateScaleVertical(40), marginBottom: moderateScaleVertical(12), fontSize: textScale(28), fontFamily: FontFamily.Poppins_Bold, color: custom_Colors.blackColor, textAlign: 'center' }}
                            />
                            <TextComp style={styles.headerStyle} text={strings.ENTER_6_DIGIT_PASSWORD + ` mazhar123@gmail.com`} />
                            <TextComp onPress={() => navigation.goBack()} style={styles.descStyle} text={'OTP Code'} />
                            <OTPTextView
                                ref={input}
                                textInputStyle={styles.textInputContainer}
                                handleTextChange={setOtpInput}
                                handleCellTextChange={handleCellTextChange}
                                inputCount={6}
                                keyboardType="numeric"
                                autoFocus
                                tintColor={custom_Colors.blackColor}
                                offTintColor={custom_Colors.whiteColorOpacity40}
                            />
                        </View>
                        {/* <View style={{ flex: 0.3, marginBottom: moderateScaleVertical(10), justifyContent: 'flex-end' }}>
                            <ButtonComp
                                text={strings.VERIFY}
                                // onPress={() => dispatch(saveUserData(true))}
                            />
                        </View> */}
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
            <ModalComp
                isVisible={isVisible}
                style={{ justifyContent: 'flex-end', margin: 0 }}
                onBackdropPress={() => setIsVisible(false)}
            >
                <View style={styles.modalStyle}>
                    <Text style={styles.headingStyle}>{strings.SET_YOUR_PASSWORD}</Text>
                    <TextInputComp
                        placeholder={strings.PASSWORD}
                        onChangeText={(val) => setPassword(val)}
                        value={Password}
                        secureTextEntry={secureText}
                        secureText={secureText ? strings.SHOW : strings.HIDE}
                        onPressSecure={() => setSecureText(!secureText)}
                        Img={true}
                        source={imagePath.LockIc}
                        ImgStyle={{ marginRight: moderateScale(5) }}
                        inputStyle={{ marginTop: moderateScale(25) }}
                    />
                    <TextInputComp
                        placeholder={strings.CONFIRM_PASSWORD}
                        onChangeText={(val) => setCPassword(val)}
                        value={CPassword}
                        secureTextEntry={secureText}
                        secureText={secureText ? strings.SHOW : strings.HIDE}
                        onPressSecure={() => setSecureText(!secureText)}
                        Img={true}
                        source={imagePath.LockIc}
                        ImgStyle={{ marginRight: moderateScale(5) }}
                        inputStyle={{ marginVertical: moderateScale(15) }}
                    />
                    <ButtonComp
                        text={strings.SUBMIT}
                        onPress={() => navigation.navigate(navigationStrings.LOGIN)}
                        style={{
                            marginTop: moderateScale(25)
                        }}
                    />
                </View>
            </ModalComp>
        </WrapperContainer>
    )
}

export default Otp

const styles = StyleSheet.create({

    headerStyle: {
        fontSize: textScale(16),
        fontFamily: FontFamily.Poppins_Medium,

    },
    descStyle: {
        fontSize: textScale(14),
        fontFamily: FontFamily.Poppins_Regular,
        color: custom_Colors.blueColor,
        marginTop: moderateScaleVertical(45),
        marginBottom: moderateScaleVertical(10)
    },
    textInputContainer: {
        backgroundColor: custom_Colors.whiteColor,
        borderBottomWidth: 0,
        borderRadius: 8,
        color: custom_Colors.blackColor,
        elevation: 5,
        // borderWidth: 1,
        height: 40,
        width: 40
    },
    resendCodeStyle: {
        fontSize: textScale(14),
        fontFamily: FontFamily.regular,
        marginTop: moderateScaleVertical(8),
        marginBottom: moderateScaleVertical(16)
    },
    modalStyle: {
        backgroundColor: custom_Colors.whiteColor,
        minHeight: moderateScale(50),
        borderTopLeftRadius: moderateScale(8),
        borderTopRightRadius: moderateScale(8),
        padding: moderateScale(16)
    },
    headingStyle: {
        fontFamily: FontFamily.bold,
        color: custom_Colors.blackColor,
        fontSize: textScale(18),
        textTransform: 'capitalize',
        marginBottom: moderateScaleVertical(12),
    },
})