import React, { useState } from 'react';
import { I18nManager, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import RNRestart from 'react-native-restart';
import { useSelector } from 'react-redux';
import ButtonComp from '../../Components/ButtonComp';
import LeftTextRightImage from '../../Components/LeftTextRightImage';
import ModalComp from '../../Components/ModalComp';
import WrapperContainer from '../../Components/WrapperContainer';
import navigationStrings from '../../Navigations/navigationStrings';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import { langData } from '../../constants/langtheme/langData';
import { changeLanguage } from '../../redux/actions/appSettings';
import FontFamily from '../../styles/FontFamily';
import { custom_Colors } from '../../styles/colors';
import { height, moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize';
import TextComp from '../../Components/TextComp';


const InitialScreen = ({ navigation }) => {

  const myLang = useSelector(state => state?.appSetting?.lang);
  const [isVisible, setIsVisible] = useState(false);

  const onPressLang = (lan) => {
    setIsVisible(false)
    if (lan == 'ar' && myLang !== lan) {
      changeLanguage(lan)
      setTimeout(() => {
        I18nManager.forceRTL(true)
        RNRestart.restart();
      }, 400);
    } else if (myLang !== lan) {
      changeLanguage(lan)
      setTimeout(() => {
        I18nManager.forceRTL(false)
        // RNRestart.restart();
      }, 400);
    }
  }

  return (
    <WrapperContainer>
      <View style={{ flex: 0.6 }}>
        <Image source={imagePath.BannerIMG} style={styles.LogoStyle} />
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => setIsVisible(true)}
        style={{
          ...styles.circularStyle,
          backgroundColor: custom_Colors.themeColor,
        }} >
        <Text style={{
          ...styles.textStyle,
          color: custom_Colors.blackColor,
          textAlign: 'left'
        }} >{myLang}</Text>
      </TouchableOpacity>
      <View style={styles.BottomStyle}>
        <View style={{ width: `90%` }}>
          <TextComp
            text={strings.LIFE_IS_SHORT}
            style={{
              fontFamily: FontFamily.Poppins_Bold,
              fontSize: textScale(30),
              textAlign: 'center'
            }}
          />
          <TextComp
            text={strings.WORLD_IS_WISE}
            style={{
              fontFamily: FontFamily.Poppins_Bold,
              fontSize: textScale(30),
              textAlign: 'center'
            }}
          />
          <TextComp
            text={strings.GET_START_TITLE}
            style={{
              marginTop: moderateScaleVertical(15), fontFamily: FontFamily.Poppins_Regular, fontSize: textScale(14),
              textAlign: 'center'
            }}
          />
        </View>
        <ButtonComp
          style={{ width: '90%' }}
          text={strings.GET_START}
          onPress={() => navigation.navigate(navigationStrings.LOGIN)}
        />
      </View>
      <ModalComp
        isVisible={isVisible}
        style={{ justifyContent: 'flex-end', margin: 0 }}
        onBackdropPress={() => setIsVisible(false)}
      >
        <View style={styles.modalStyle}>
          <Text style={styles.headingStyle}>{strings.CHOOSE_LANGUAGE}</Text>
          {langData.map((val, i) => {
            return (
              <LeftTextRightImage
                key={String(i)}
                text={val.title}
                isSelected={myLang == val.code}
                onPress={() => onPressLang(val.code)}
              />
            )
          })}
        </View>
      </ModalComp>
    </WrapperContainer>
  )
}

export default InitialScreen
const styles = StyleSheet.create({
  LogoStyle: {
    width: '100%',
    height: '100%',
    borderBottomRightRadius: moderateScale(30),
    borderBottomLeftRadius: moderateScale(30),
  },
  circularStyle: {
    height: moderateScale(40),
    width: moderateScale(40),
    borderRadius: moderateScale(20),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginRight: moderateScaleVertical(15),
    marginTop: moderateScaleVertical(10)
  },
  textStyle: {
    fontFamily: FontFamily.Poppins_SemiBold,
    color: custom_Colors.whiteColor,
    textAlign: 'center',
    fontSize: textScale(14),
    textTransform: 'capitalize'
  },
  modalStyle: {
    backgroundColor: custom_Colors.whiteColor,
    minHeight: moderateScale(height / 4),
    borderTopLeftRadius: moderateScale(8),
    borderTopRightRadius: moderateScale(8),
    padding: moderateScale(16)
  },
  headingStyle: {
    fontFamily: FontFamily.semiBold,
    color: custom_Colors.blackColor,
    fontSize: textScale(16),
    textTransform: 'capitalize',
    marginBottom: moderateScaleVertical(12)
  },
  BottomStyle: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: moderateScale(22)
  }
})