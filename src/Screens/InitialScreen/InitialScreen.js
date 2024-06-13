import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import WrapperContainer from '../../Components/WrapperContainer'
import imagePath from '../../constants/imagePath'
import FontFamily from '../../styles/FontFamily'
import { moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize'
import ButtonComp from '../../Components/ButtonComp'
import { custom_Colors } from '../../styles/colors'
import navigationStrings from '../../Navigations/navigationStrings'

const InitialScreen = ({ navigation }) => {
  return (
    <WrapperContainer>
      <View style={{ flex: 0.6 }}>
        <Image source={imagePath.BannerIMG} style={styles.LogoStyle} />
      </View>
      <View style={{ flex: 0.4, alignItems: 'center', justifyContent: 'space-between', paddingVertical: moderateScale(22) }}>
        <View style={{ width: `90%` }}>
          <Text style={{ fontFamily: FontFamily.Poppins_Bold, fontSize: textScale(30), color: custom_Colors.blackColor, textAlign: 'center' }}>Life is Short and the </Text>
          <Text style={{ fontFamily: FontFamily.Poppins_Bold, fontSize: textScale(30), color: custom_Colors.blackColor, textAlign: 'center' }}>
            world is wide
          </Text>
          <Text style={{ marginTop: moderateScaleVertical(15), fontFamily: FontFamily.regular, fontSize: textScale(16), color: custom_Colors.blackColor, textAlign: 'center' }}>
            At Friends tours and travel, we customize reliable and trutworthy educational tours to destinations all over the world
          </Text>
        </View>
        <ButtonComp
          style={{ width: '90%' }}
          text='Get Start'
          onPress={() => navigation.navigate(navigationStrings.LOGIN)}
        />
      </View>


    </WrapperContainer>
  )
}

export default InitialScreen
const styles = StyleSheet.create({
  LogoStyle: {
    width: '100%',
    height: '100%',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30
    // resizeMode: 'contain',
    // width: moderateScale(315),
    // height: moderateScale(315)
  }
})