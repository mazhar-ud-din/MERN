import React, { useState } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ButtonComp from '../../Components/ButtonComp'
import HeaderComp from '../../Components/HeaderComp'
import TextComp from '../../Components/TextComp'
import TextInputComp from '../../Components/TextInputComp'
import WrapperContainer from '../../Components/WrapperContainer'
import navigationStrings from '../../Navigations/navigationStrings'
import imagePath from '../../constants/imagePath'
import strings from '../../constants/lang'
import FontFamily from '../../styles/FontFamily'
import { custom_Colors } from '../../styles/colors'
import { moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize'


const Signup = ({ navigation }) => {

    const [FName, setFName] = useState('')
    const [MName, setMName] = useState('')
    const [LName, setLName] = useState('')
    const [Email, setEmail] = useState('')
    const [Country, setCountry] = useState('')
    const [PhoneNO, setPhoneNO] = useState('')

    return (
        <WrapperContainer>
            < KeyboardAwareScrollView bounces={true} height={50}
                showsVerticalScrollIndicator={false}
            >
                <HeaderComp />
                <View style={styles.container}>
                    <TextComp
                        text={strings.SIGN_UP_NOW}
                        style={styles.SignText}
                    />
                    <Image source={imagePath.CYGLoginLogo} style={styles.LogoStyle} />
                    <TextComp
                        text={strings.FILL_DETAILS_SIGNUP}
                        style={styles.desStyle}
                    />
                    <TextInputComp
                        placeholder={strings.FIRST_NAME}
                        onChangeText={(val) => setFName(val)}
                        value={FName}
                        inputStyle={{ marginTop: moderateScale(15) }}
                        Img={true}
                        source={imagePath.UserIc}
                        ImgStyle={styles.imageRight}
                    />
                    <TextInputComp
                        placeholder={strings.MIDDLE_NAME}
                        onChangeText={(val) => setMName(val)}
                        value={MName}
                        Img={true}
                        source={imagePath.UserIc}
                        ImgStyle={styles.imageRight}
                    />
                    <TextInputComp
                        placeholder={strings.LAST_NAME}
                        onChangeText={(val) => setLName(val)}
                        value={LName}
                        Img={true}
                        source={imagePath.UserIc}
                        ImgStyle={styles.imageRight}
                    />
                    <TextInputComp
                        placeholder={strings.EMAIL}
                        onChangeText={(val) => setEmail(val)}
                        value={Email}
                        Img={true}
                        source={imagePath.MailIc}
                        ImgStyle={styles.imageRight}
                    />
                    <TextInputComp
                        placeholder={strings.SELECT_COUNTRY}
                        onChangeText={(val) => setCountry(val)}
                        value={Country}
                        Img={true}
                        source={imagePath.CountryIc}
                        ImgStyle={styles.imageRight}
                    />
                    <TextInputComp
                        placeholder={strings.PHONE_NO}
                        onChangeText={(val) => setPhoneNO(val)}
                        value={PhoneNO}
                        Img={true}
                        source={imagePath.PhoneIc}
                        ImgStyle={styles.imageRight}
                    />
                    <ButtonComp
                        text={strings.NEXT}
                        onPress={() => navigation.navigate(navigationStrings.OTP_VERIFICATION)}
                        style={{ marginTop: moderateScaleVertical(50) }}
                    />
                </View>
            </KeyboardAwareScrollView>
        </WrapperContainer>
    )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        margin: moderateScale(16)
    },
    LogoStyle: {
        width: moderateScale(200),
        height: moderateScale(40),
        alignSelf: 'center'
    },
    SignText: {
        textAlign: 'center',
        marginTop: moderateScaleVertical(30),
        marginBottom: moderateScaleVertical(12),
        fontSize: textScale(28),
        fontFamily: FontFamily.Poppins_Bold,
        color: custom_Colors.blackOpacity70,
    },
    desStyle: {
        marginVertical: moderateScaleVertical(20),
        fontSize: textScale(14),
        fontFamily: FontFamily.semiBold,
        color: custom_Colors.blackColor
    },
    imageRight: {
        marginRight: moderateScaleVertical(5)
    }
})