import ReadMore from '@fawazahmed/react-native-read-more'
import { FlashList } from '@shopify/flash-list'
import React, { useCallback, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Rating } from 'react-native-ratings'
import ButtonComp from '../../Components/ButtonComp'
import HeaderComp from '../../Components/HeaderComp'
import TextComp from '../../Components/TextComp'
import WrapperContainer from '../../Components/WrapperContainer'
import imagePath from '../../constants/imagePath'
import FontFamily from '../../styles/FontFamily'
import { custom_Colors } from '../../styles/colors'
import { moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize'

const GuideProfile = ({ navigation }) => {
    const [posts, setPosts] = useState([
        {}, {}, {}
    ])
    const [post, setPost] = useState([
        {}, {}, {}
    ])

    const renderItem1 = useCallback(({ item, index }) => {
        return (
            <View >
                <Image source={imagePath.BannerIMG} style={{ height: 50, width: 50, borderRadius: 10, margin: 6 }} />
            </View>
        )
    }, [post])

    const listEmptyComp1 = () => {
        return (
            <View style={styles.ListEmptyContainer}>
                <TextComp
                    text='No data found'
                    style={{
                        ...styles.notDataFound,
                    }}
                />
            </View>
        )
    }
    const renderItem = useCallback(({ item, index }) => {
        return (
            <TouchableOpacity >
                <View style={styles.boxStyle}>
                    <View style={styles.ImgContainer}>
                        <Image source={imagePath.DestinationImg} style={{ width: 120, height: 110 }} />
                    </View>
                    <TextComp
                        text={'Turkey'}
                        style={{
                            fontSize: textScale(12),
                            fontFamily: FontFamily.Poppins_Regular,
                            marginTop: moderateScaleVertical(10)
                        }}
                    />
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={imagePath.ProfileImg} style={{ height: 20, width: 20, borderRadius: 20 }} />
                        <TextComp
                            text={'Mazhar'}
                            style={{
                                fontSize: textScale(12),
                                fontFamily: FontFamily.Poppins_Regular,
                                marginLeft: moderateScaleVertical(5)
                            }}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Image source={imagePath.icHeart} style={{ height: 20, width: 20 }} />
                        <TextComp
                            text={'4.7'}
                            style={{
                                fontSize: textScale(12),
                                fontFamily: FontFamily.Poppins_Regular,
                                marginLeft: moderateScaleVertical(5)
                            }}
                        />
                    </View>
                    <TextComp
                        text={'$458/'}
                        style={{
                            fontSize: textScale(12),
                            fontFamily: FontFamily.Poppins_Regular,
                            color: custom_Colors.themeColor
                        }}
                    ><Text style={{ color: custom_Colors.blackColor }}>Person</Text></TextComp>
                </View>
            </TouchableOpacity>

        )
    }, [posts])

    const listEmptyComp = () => {
        return (
            <View style={styles.ListEmptyContainer}>
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
            <HeaderComp
                rightImage={imagePath.BookMarkIc}
                rightStyle={{
                    tintColor: custom_Colors.gray5,
                    width: 25,
                    height: 25
                }}
            />
            <ScrollView style={{ margin: moderateScale(16) }} showsVerticalScrollIndicator={false}>

                <Image
                    source={imagePath.ProfileImg}
                    style={styles.profileStyle} />
                <TextComp
                    text={'Mazhar Ud Din'}
                    style={{
                        alignSelf: 'center',
                        fontSize: textScale(18),
                        fontFamily: FontFamily.Poppins_SemiBold,
                        marginTop: moderateScaleVertical(10)
                    }}
                />
                <TextComp
                    text={'Authentically cappadocia, Red Valley Hiking around the white table-top mountain-4 hours tour Red Valley '}
                    style={{
                        alignSelf: 'center',
                        fontSize: textScale(12),
                        fontFamily: FontFamily.Poppins_Regular,
                        marginTop: moderateScaleVertical(10)
                    }}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: moderateScaleVertical(25) }}>
                    <ButtonComp
                        text='Message'
                        style={{
                            width: moderateScale(100),
                            height: moderateScale(42),
                        }}
                        textStyle={{
                            fontSize: textScale(12),
                            fontFamily: FontFamily.Poppins_Regular,
                        }}
                    />
                    <ButtonComp
                        text='Share Profile'
                        style={{
                            width: moderateScale(100),
                            height: moderateScale(42),
                        }}
                        textStyle={{
                            fontSize: textScale(12),
                            fontFamily: FontFamily.Poppins_Regular,
                        }}
                    />
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: moderateScaleVertical(20),
                    padding: moderateScale(10),
                    borderRadius: 10,
                    backgroundColor: custom_Colors.whiteColor,
                    elevation: 2
                }}>
                    <View>
                        <TextComp
                            text={'Rating: 5'}
                            style={{
                                fontSize: textScale(12),
                                fontFamily: FontFamily.Poppins_Regular,

                            }}
                        />
                        <TextComp
                            text={'Guide Language :'}
                            style={{
                                fontSize: textScale(12),
                                fontFamily: FontFamily.Poppins_Regular,

                            }}
                        />
                        <TextComp
                            text={'Total Destination :'}
                            style={{
                                fontSize: textScale(12),
                                fontFamily: FontFamily.Poppins_Regular,

                            }}
                        />
                        <TextComp
                            text={'Complete Tour :'}
                            style={{
                                fontSize: textScale(12),
                                fontFamily: FontFamily.Poppins_Regular,

                            }}
                        />
                    </View>

                    <View>
                        <Image
                            source={imagePath.icHeart}
                            style={{
                                tintColor: custom_Colors.redColor,
                                width: 15,
                                height: 15
                            }} />
                        <TextComp
                            text={'English, Spanish'}
                            style={{
                                fontSize: textScale(12),
                                fontFamily: FontFamily.Poppins_Regular,
                                alignSelf: 'flex-end',
                                color: custom_Colors.themeColor
                            }}
                        />
                        <TextComp
                            text={'01'}
                            style={{
                                fontSize: textScale(12),
                                fontFamily: FontFamily.Poppins_Regular,
                                alignSelf: 'flex-end',
                                color: custom_Colors.themeColor
                            }}
                        />
                        <TextComp
                            text={'03'}
                            style={{
                                fontSize: textScale(12),
                                fontFamily: FontFamily.Poppins_Regular,
                                alignSelf: 'flex-end',
                                color: custom_Colors.themeColor
                            }}
                        />
                    </View>
                </View>

                <TextComp
                    text={'About Me'}
                    style={{
                        fontSize: textScale(18),
                        fontFamily: FontFamily.Poppins_SemiBold,
                        marginTop: moderateScaleVertical(15)
                    }}
                />
                <ReadMore numberOfLines={3} style={styles.textStyle}>
                    {
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                    }
                </ReadMore>
                <TextComp
                    text={'My Tour'}
                    style={{
                        fontSize: textScale(18),
                        fontFamily: FontFamily.Poppins_SemiBold,
                        marginTop: moderateScaleVertical(15)
                    }}
                />

                <FlashList
                    data={posts}
                    renderItem={renderItem}
                    estimatedItemSize={200}
                    ItemSeparatorComponent={() => <View style={{ height: moderateScale(20) }} />}
                    ListEmptyComponent={listEmptyComp}
                    horizontal
                    contentContainerStyle={{}}
                    showsHorizontalScrollIndicator={false}
                />
                <TextComp
                    text={'Gallery'}
                    style={{
                        fontSize: textScale(18),
                        fontFamily: FontFamily.Poppins_SemiBold,
                        marginTop: moderateScaleVertical(15)
                    }}
                />
                <FlashList
                    data={post}
                    renderItem={renderItem1}
                    estimatedItemSize={200}
                    ItemSeparatorComponent={() => <View style={{ height: moderateScale(20) }} />}
                    ListEmptyComponent={listEmptyComp1}
                    horizontal
                    contentContainerStyle={{}}
                    showsHorizontalScrollIndicator={false}
                />
                <TextComp
                    text={'Videos'}
                    style={{
                        fontSize: textScale(18),
                        fontFamily: FontFamily.Poppins_SemiBold,
                        marginTop: moderateScaleVertical(15)
                    }}
                />
                <FlashList
                    data={post}
                    renderItem={renderItem1}
                    estimatedItemSize={200}
                    ItemSeparatorComponent={() => <View style={{ height: moderateScale(20) }} />}
                    ListEmptyComponent={listEmptyComp1}
                    horizontal
                    contentContainerStyle={{}}
                    showsHorizontalScrollIndicator={false}
                />
                <TextComp
                    text={'Reviews'}
                    style={{
                        fontSize: textScale(18),
                        fontFamily: FontFamily.Poppins_SemiBold,
                        marginTop: moderateScaleVertical(15)
                    }}
                />
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: moderateScaleVertical(10) }}>
                    <TextComp
                        text={'Meraj Manzar'}
                        style={{
                            fontSize: textScale(12),
                            fontFamily: FontFamily.Poppins_SemiBold,
                            marginLeft: moderateScaleVertical(5)
                        }}
                    />
                    <Rating
                        type='star'
                        ratingCount={5}
                        imageSize={10}
                        startingValue={5}
                    // showRating
                    // onFinishRating={ratingCompleted}
                    />
                </View>
                <TextComp
                    text={'Had a excellent tour, thanks for this amazing experience'}
                    style={{
                        fontSize: textScale(12),
                        fontFamily: FontFamily.Poppins_Regular,
                        marginLeft: moderateScaleVertical(5)
                    }}
                />
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: moderateScaleVertical(10) }}>
                    <TextComp
                        text={'Maaz Matloob'}
                        style={{
                            fontSize: textScale(14),
                            fontFamily: FontFamily.Poppins_SemiBold,
                            marginLeft: moderateScaleVertical(5)
                        }}
                    />
                    <Rating
                        type='star'
                        ratingCount={5}
                        imageSize={10}
                        startingValue={5}
                    // showRating
                    // onFinishRating={ratingCompleted}
                    />
                </View>
                <TextComp
                    text={'Had a excellent tour, thanks for this amazing experience'}
                    style={{
                        fontSize: textScale(12),
                        fontFamily: FontFamily.Poppins_Regular,
                        marginLeft: moderateScaleVertical(5)
                    }}
                />
            </ScrollView>
        </WrapperContainer>
    )
}

export default GuideProfile

const styles = StyleSheet.create({
    profileStyle: {
        width: moderateScale(100),
        height: moderateScale(100),
        borderRadius: 15,
        alignSelf: 'center',
        marginTop: moderateScaleVertical(40),
    },
    textStyle: {
        fontSize: textScale(11),
        fontFamily: FontFamily.Poppins_Regular,
        color: custom_Colors.blackColor
        // marginTop: moderateScaleVertical(10)
    },
    boxStyle: {
        backgroundColor: custom_Colors.whiteColor,
        borderRadius: moderateScale(8),
        padding: moderateScale(8),
        elevation: 5,
        margin: moderateScale(8),
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
    notDataFound: {
        fontSize: textScale(24),
        fontFamily: FontFamily.regular,
    },
})