import React from 'react'
import { Alert, Image, StyleSheet, View } from 'react-native'
import HeaderComp from '../../Components/HeaderComp'
import ProfileMenu from '../../Components/ProfileMenu'
import TextComp from '../../Components/TextComp'
import WrapperContainer from '../../Components/WrapperContainer'
import imagePath from '../../constants/imagePath'
import FontFamily from '../../styles/FontFamily'
import { custom_Colors } from '../../styles/colors'
import { moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize'
import navigationStrings from '../../Navigations/navigationStrings'

const Profile = ({ navigation }) => {
    return (
        <WrapperContainer>
            <HeaderComp
                rightImage={imagePath.EditIc}
                centerText={'Profile'}
                onPressRight={() => navigation.navigate(navigationStrings.PROFILE_EDIT)}
            />
            <Image
                source={imagePath.ProfileImg}
                style={styles.profileStyle} />
            <TextComp
                text={'Mazhar Ud din'}
                style={styles.profileUser}
            />
            <TextComp
                text={'developer123@gmail.com'}
                style={styles.profileEmail}
            />
            <View style={styles.textArea}>
                <View style={styles.rightArea}>
                    <TextComp
                        text='Reward Points'
                        style={{
                            fontSize: textScale(14),
                            fontFamily: FontFamily.Poppins_SemiBold
                        }}
                    />
                    <TextComp
                        text='360'
                        style={{
                            fontSize: textScale(14),
                            fontFamily: FontFamily.Poppins_SemiBold,
                            color: custom_Colors.themeColor
                        }}
                    />
                </View>
                <View style={styles.textCenter}>
                    <TextComp
                        text='Travel Trips'
                        style={{
                            fontSize: textScale(14),
                            fontFamily: FontFamily.Poppins_SemiBold
                        }}
                    />
                    <TextComp
                        text='340'
                        style={{
                            fontSize: textScale(14),
                            fontFamily: FontFamily.Poppins_SemiBold,
                            color: custom_Colors.themeColor
                        }}
                    />
                </View>
                <View style={styles.textLeft}>
                    <TextComp
                        text='Bucket List'
                        style={{
                            fontSize: textScale(14),
                            fontFamily: FontFamily.Poppins_SemiBold,
                        }}
                    />
                    <TextComp
                        text='678'
                        style={{
                            fontSize: textScale(14),
                            fontFamily: FontFamily.Poppins_SemiBold,
                            color: custom_Colors.themeColor

                        }}
                    />
                </View>
            </View>
            <ProfileMenu
                leftImage={imagePath.ProfileIc}
                text={'Profile'}
                rightImage={imagePath.ForwardIc}
                onPress={() => Alert.alert('Coming Soon')}
            />
            <ProfileMenu
                leftImage={imagePath.BookMarkIc}
                text={'BookMarked'}
                rightImage={imagePath.ForwardIc}
                onPress={() => Alert.alert('Coming Soon')}
            />
            <ProfileMenu
                leftImage={imagePath.TripsIc}
                text={'Previous Trips'}
                rightImage={imagePath.ForwardIc}
                onPress={() => Alert.alert('Coming Soon')}
            />
            <ProfileMenu
                leftImage={imagePath.SettingIc}
                text={'Setting'}
                rightImage={imagePath.ForwardIc}
                onPress={() => Alert.alert('Coming Soon')}
            />
            <ProfileMenu
                leftImage={imagePath.VersionIc}
                text={'Version'}
                rightImage={imagePath.ForwardIc}
                onPress={() => Alert.alert('Coming Soon')}
            />
        </WrapperContainer>
    )
}

export default Profile

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
        fontFamily: FontFamily.Poppins_Regular
    },
    textArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: moderateScale(25),
        borderRadius: 10,
        padding: moderateScale(10),
        backgroundColor: custom_Colors.whiteColor,
        elevation: 1,
    },
    rightArea: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        borderRightWidth: 1
    },
    textCenter: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    textLeft: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        borderLeftWidth: 1
    }
})