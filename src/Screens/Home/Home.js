import { FlashList } from '@shopify/flash-list'
import React, { useCallback, useState } from 'react'
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native'
import FastImageComp from '../../Components/FastImageComp'
import HeaderComp from '../../Components/HeaderComp'
import TextComp from '../../Components/TextComp'
import WrapperContainer from '../../Components/WrapperContainer'
import navigationStrings from '../../Navigations/navigationStrings'
import imagePath from '../../constants/imagePath'
import { custom_Colors } from '../../styles/colors'
import { moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize'
import styles from './styles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import FontFamily from '../../styles/FontFamily'

const Home = ({ navigation }) => {
    const [posts, setPosts] = useState([
        {}, {}, {}
    ])
    const renderItem = useCallback(({ item, index }) => {
        return (

            <View style={{
                 ...styles.boxStyle, 
                 flexDirection: "row", 
                 alignItems: 'center', 
                 justifyContent: 'space-between',
                 marginBottom:moderateScaleVertical(10)

                  }}>
                <View style={{ flexDirection: "row", alignItems: 'center', flex: 1 }}>
                    <Image source={imagePath.DestinationImg}/>
                    {/* <FastImageComp
                        url={imagePath.DestinationImg}
                        imageStyle={styles.profileImage}
                    /> */}
                </View>
                <TouchableOpacity
                    activeOpacity={0.7}
                >
                    <Image source={imagePath.icDots} />
                </TouchableOpacity>
            </View>

        )
    }, [posts])

    const listEmptyComp = () => {
        return (
            <View style={{ alignItems: "center", marginTop: 24 }}>
                <TextComp
                    text='No data found'
                    style={{
                        ...styles.notDataFound,
                    }}
                />
            </View>
        )
    }
    return (
        <WrapperContainer>
            <View style={{ flex: 1, padding: moderateScale(16) }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingVertical: 3,
                        borderRadius: 15,
                        paddingHorizontal: 10,
                        backgroundColor: custom_Colors.blackOpacity10
                    }}>
                        <Image source={imagePath.UserIc} style={{ width: 30, height: 30, tintColor: custom_Colors.blackColor }} />
                        <TextComp
                            text={'Mazhar ud din'}
                            style={{ fontSize: textScale(14), marginTop: moderateScaleVertical(5) }}
                        />
                    </View>
                    <View style={{
                        padding: 10,
                        borderRadius: moderateScale(20),
                        backgroundColor: custom_Colors.blackOpacity10
                    }}>
                        <Image source={imagePath.NotificationIc} style={{ tintColor: custom_Colors.blackColor }} />
                    </View>
                </View>
                <TextComp
                    text={'Explore The'}
                    style={{
                        fontSize: textScale(30),
                        fontFamily: FontFamily.Poppins_Regular,
                        marginTop: moderateScaleVertical(28)
                    }}
                />
                <TextComp text={'Beautiful'}
                    style={{
                        fontSize: textScale(30),
                        fontFamily: FontFamily.Poppins_SemiBold,
                    }}
                > <Text style={{
                    color: custom_Colors.themeColor,
                }}>
                        World!</Text>
                </TextComp>
                <FlashList
                    data={posts}
                    renderItem={renderItem}
                    estimatedItemSize={200}
                    ItemSeparatorComponent={() => <View style={{ height: moderateScale(20) }} />}
                    ListEmptyComponent={listEmptyComp}
                    horizontal
                />
            </View>
        </WrapperContainer>
    )
}

export default Home
