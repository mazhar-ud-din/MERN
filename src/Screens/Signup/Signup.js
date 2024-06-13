import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import HeaderComp from '../../Components/HeaderComp'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize'
import FontFamily from '../../styles/FontFamily'
import { custom_Colors } from '../../styles/colors'
import TextComp from '../../Components/TextComp'
import imagePath from '../../constants/imagePath'


const Signup = () => {
    return (
        <WrapperContainer>
            < KeyboardAwareScrollView>
                <HeaderComp />
                <View style={{ margin: moderateScale(16) }}>
                    <TextComp
                        text={'I am new to'}
                        style={{ marginTop: moderateScaleVertical(30), marginBottom: moderateScaleVertical(16), fontSize: textScale(26), fontFamily: FontFamily.Poppins_Bold, color: custom_Colors.blackOpacity60 }}
                    />
                    <Image source={imagePath.CYGLoginLogo} style={styles.LogoStyle} />
                    <TextComp
                        text={'Explore the world with us!'}
                        style={{ marginVertical: moderateScaleVertical(20), fontSize: textScale(18), fontFamily: FontFamily.semiBold, color: custom_Colors.blackColor }}
                    />
                      {/* <TextInputComp
                                placeholder='Email'
                                onChangeText={(val) => setEmail(val)}
                                value={Email}
                                inputStyle={{ marginTop: 15 }}
                                Img={true}
                                source={imagePath.MailIc}
                                ImgStyle={{ marginRight: moderateScale(5) }}
                            /> */}

                </View>


            </KeyboardAwareScrollView>
        </WrapperContainer>
    )
}

export default Signup

const styles = StyleSheet.create({
    LogoStyle: {
        // resizeMode: 'contain',
        width: moderateScale(200),
        height: moderateScale(40),
    }
})