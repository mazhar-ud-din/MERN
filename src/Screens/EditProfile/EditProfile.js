import { Alert, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import HeaderComp from '../../Components/HeaderComp'
import imagePath from '../../constants/imagePath'
import navigationStrings from '../../Navigations/navigationStrings'
import { custom_Colors } from '../../styles/colors'
import { moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize'
import FontFamily from '../../styles/FontFamily'
import TextComp from '../../Components/TextComp'
import TextInputComp from '../../Components/TextInputComp'

const EditProfile = ({ navigation }) => {
  return (
    <WrapperContainer>
      <HeaderComp
        centerText={'Edit Profile'}
        rightText='Done'
        rightTextStyle={{
          color: custom_Colors.themeColor
        }}
      />

      <View style={{ margin: moderateScale(16) }}>
        <Image
          source={imagePath.ProfileImg}
          style={styles.profileStyle} />
        <TextComp
          text={'Mazhar Ud din'}
          style={styles.profileUser}
        />
        <TextComp
          onPress={() => Alert.alert('Wait Working Continue,Coming Soon')}
          text={'Change Profile Picture'}
          style={styles.profileEmail}
        />
        <TextComp
          text={'First Name'}

          style={{
            fontSize: textScale(14),
            fontFamily: FontFamily.Poppins_SemiBold,
            marginBottom: moderateScaleVertical(8)
          }}
        />
        <TextInputComp
          value='First Name'
          Img={true}
          source={imagePath.UserIc}
        />
        <TextComp
          text={'Last Name'}
          style={{
            fontSize: textScale(14),
            fontFamily: FontFamily.Poppins_SemiBold,
            marginBottom: moderateScaleVertical(8)
          }}
        />
        <TextInputComp
          value='Last Name'
          Img={true}
          source={imagePath.UserIc}
        />
        <TextComp
          text={'Location'}
          style={{
            fontSize: textScale(14),
            fontFamily: FontFamily.Poppins_SemiBold,
            marginBottom: moderateScaleVertical(8)
          }}
        />
        <TextInputComp
          value='Location'
          Img={true}
          source={imagePath.LocationIc}
        />
        <TextComp
          text={'Mobile Number'}
          style={{
            fontSize: textScale(14),
            fontFamily: FontFamily.Poppins_SemiBold,
            marginBottom: moderateScaleVertical(8)
          }}
        />
        <TextInputComp
          value='Mobile Number'
          Img={true}
          source={imagePath.PhoneIc}
        />
      </View>

    </WrapperContainer>
  )
}

export default EditProfile

const styles = StyleSheet.create({
  profileStyle: {
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: moderateScaleVertical(40),
  },
  profileUser: {
    alignSelf: 'center',
    fontSize: textScale(20),
    fontFamily: FontFamily.Poppins_SemiBold,
    marginTop: moderateScaleVertical(15)
  },
  profileEmail: {
    alignSelf: 'center',
    fontSize: textScale(14),
    fontFamily: FontFamily.Poppins_SemiBold,
    color: custom_Colors.themeColor,
    marginTop: moderateScaleVertical(5)
  },
})