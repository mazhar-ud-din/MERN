import { StyleSheet } from "react-native";
import FontFamily from "../../styles/FontFamily";
import { custom_Colors } from "../../styles/colors";
import { height, moderateScale, moderateScaleVertical, textScale } from "../../styles/responsiveSize";

const styles = StyleSheet.create({
   boxStyle: {
      backgroundColor: custom_Colors.whiteColor,
      borderRadius: moderateScale(8),
      padding: moderateScale(8),
      elevation: 5,
      margin: moderateScale(8),
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
   },
   ImgContainer: {
      flexDirection: "row",
      alignItems: 'center'
   },
   TextCard: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: moderateScaleVertical(10)
   },
   TextCardLeft: {
      flexDirection: 'row',
      alignItems: 'center'
   },
   BottomCardContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: moderateScaleVertical(10)
   },
   BottomCardLeft: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   BottomLeftImg: {
      tintColor: custom_Colors.blackColor,
      width: 20,
      height: 20
   },
   ListEmptyContainer: {
      alignItems: "center",
      marginTop: moderateScaleVertical(24)
   },
   container: {
      flex: 1,
      padding: moderateScale(16)
   },
   subContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
   },
   LeftHeader: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: moderateScale(3),
      borderRadius: 15,
      paddingHorizontal: moderateScale(10),
      backgroundColor: custom_Colors.blackOpacity10
   },
   LeftImg: {
      width: moderateScale(30),
      height: moderateScale(30),
      tintColor: custom_Colors.blackColor
   },
   rightHeader: {
      padding: moderateScale(10),
      borderRadius: moderateScale(20),
      backgroundColor: custom_Colors.blackOpacity10
   },
   Destination: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
   }

});

export default styles