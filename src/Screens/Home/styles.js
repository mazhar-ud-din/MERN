import { StyleSheet } from "react-native";
import { height, moderateScale, moderateScaleVertical, textScale, width } from "../../styles/responsiveSize";
import { custom_Colors } from "../../styles/colors";
import FontFamily from "../../styles/FontFamily";




// define your styles
const styles = StyleSheet.create({
   boxStyle: {
      backgroundColor: custom_Colors.whiteColor,
      borderRadius: moderateScale(8),
      padding: moderateScale(12),
      elevation: 5,
      marginHorizontal: moderateScale(8),
      width:`80%`
   },
   profileImage: {
      width: moderateScale(60),
      height: moderateScale(60),
      borderRadius: moderateScale(30),
      marginRight: moderateScale(16)
   },
   nameStyle: {
      fontSize: textScale(16),
      fontFamily: FontFamily.medium,
      color: custom_Colors.whiteColor,
   },
   bioStyle: {
      fontSize: textScale(12),
      fontFamily: FontFamily.medium,
      color: custom_Colors.whiteColorOpacity50,
      marginTop: moderateScaleVertical(4)
   },
   postImage: {
      width: '100%',
      height: height / 2.8,
      borderRadius: moderateScale(8),
      marginRight: moderateScale(16),
      marginVertical: moderateScaleVertical(16)
   },
   descStyle: {
      fontSize: textScale(14),
      fontFamily: FontFamily.regular,
   },
   flexHorizontal: {
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: "space-between",
   },
   notDataFound: {
      fontSize: textScale(24),
      fontFamily: FontFamily.regular,

   }
});

export default styles