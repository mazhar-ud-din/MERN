import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import TextComp from '../../Components/TextComp'
import ButtonComp from '../../Components/ButtonComp'
import { moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize'
import { custom_Colors } from '../../styles/colors'
import FontFamily from '../../styles/FontFamily'
import imagePath from '../../constants/imagePath'
import { FlashList } from '@shopify/flash-list'
import navigationStrings from '../../Navigations/navigationStrings'
import { Rating } from 'react-native-ratings'

const TourFeatures = ({ navigation }) => {
    const [posts, setPosts] = useState([
        {}, {}, {}
    ])

    const renderItem = useCallback(({ item, index }) => {
        return (
            <View >
                <Image source={imagePath.BannerIMG} style={{ height: 50, width: 50, borderRadius: 10, margin: 8 }} />
            </View>
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
            <Image source={imagePath.BannerIMG} style={styles.LogoStyle} />
            <ScrollView style={{ margin: moderateScale(16), marginBottom: 70 }} showsVerticalScrollIndicator={false}>
                <TextComp
                    text={'Authentically cappadocia, Red Valley Hiking around the white table-top mountain-4 hours tour'}
                    style={{
                        fontSize: textScale(14),
                        fontFamily: FontFamily.Poppins_SemiBold,
                        marginTop: moderateScaleVertical(10)
                    }}
                />
                <ButtonComp
                    text='Hiking and walking'
                    style={{
                        width: moderateScale(150),
                        height: moderateScale(25),
                        marginTop: moderateScale(15)
                    }}
                    textStyle={{
                        fontSize: textScale(12),
                        fontFamily: FontFamily.Poppins_Regular,
                    }}
                />
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: moderateScale(15) }}>
                    <View>
                        <TextComp
                            text={'Guide:'}
                            style={{
                                fontSize: textScale(14),
                                fontFamily: FontFamily.Poppins_SemiBold,
                            }}
                        ><Text style={{ color: custom_Colors.themeColor }}>Erkan V </Text ></TextComp>
                        <TextComp
                            text={'English:Spanish '}
                            style={{
                                fontSize: textScale(12),
                                fontFamily: FontFamily.Poppins_Regular,
                            }}
                        />
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.GUIDE_PROFILE)}>
                        <Image
                            source={imagePath.ProfileImg}
                            style={styles.profileStyle} />
                    </TouchableOpacity>

                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: moderateScale(10) }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={imagePath.LocationIc}
                            style={styles.BottomLeftImg} />
                        <TextComp
                            text={'Turkey'}
                            style={{
                                fontFamily: FontFamily.Poppins_Regular,
                                fontSize: textScale(16)
                            }}
                        />
                    </View>
                    <View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Rating
                                type='star'
                                ratingCount={5}
                                imageSize={10}
                                startingValue={5}
                            // showRating
                            // onFinishRating={ratingCompleted}
                            />
                            <TextComp
                                text={'432 (1234)'}
                                style={{
                                    fontFamily: FontFamily.Poppins_Regular,
                                    fontSize: textScale(16)
                                }}
                            />
                        </View>
                    </View>
                    <TextComp
                        text={'4 Hour'}
                        style={{
                            fontFamily: FontFamily.Poppins_Regular,
                            fontSize: textScale(16)
                        }}
                    />
                </View>

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
                    text={'Tour Description'}
                    style={{
                        fontSize: textScale(18),
                        fontFamily: FontFamily.Poppins_SemiBold,
                        marginTop: moderateScaleVertical(10)
                    }}
                />
                <TextComp
                    text={`Authentically cappadocia, Red Valley Hiking around the white table-top mountain-4 hours tour Red Valley Hiking around the white Red Valley Hiking around the white Authentically cappadocia, Red Valley Hiking around the white table-top mountain-4 hours tour Red Valley Hiking around the white Red Valley Hiking around the white`}
                    style={{
                        fontSize: textScale(14),
                        fontFamily: FontFamily.Poppins_Regular,
                        marginTop: moderateScaleVertical(10)
                    }}
                />
                <TextComp
                    text={'Tour Itinerary'}
                    style={{
                        fontSize: textScale(18),
                        fontFamily: FontFamily.Poppins_SemiBold,
                        marginTop: moderateScaleVertical(10)
                    }}
                />
                <View style={styles.container}>
                    <View style={styles.lineContainer}>
                        <View style={styles.dot} />
                        <TextComp
                            text={'Meeting Point-your hotel or desired locations'}
                            style={styles.heading}
                        />
                    </View>
                    <View style={styles.bodyContainer}>
                        <View style={styles.borderLine} />
                        <TextComp
                            text={
                                'Meeting Point Meeting Point Meeting Point Meeting Point Meeting Point Meeting Point Meeting Point Meeting Point Meeting Point Meeting Point Meeting Point Meeting Point Meeting Point Meeting Point Meeting Point Meeting Point Meeting Point Meeting Point'
                            }
                            style={styles.bodyText}
                        />
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.lineContainer}>
                        <View style={styles.dot} />
                        <TextComp
                            text={'Red Valley'}
                            style={styles.heading}
                        />
                    </View>
                    <View style={styles.bodyContainer}>
                        <View style={styles.borderLine} />
                        <TextComp
                            text={
                                'Meeting Point Meeting Point Meeting Point Meeting Point Meeting Point Meeting Point Meeting Point Meeting Point Meeting Point Meeting Point Meeting Point Meeting Point Meeting Point Meeting Point Meeting Point Meeting Point Meeting Point Meeting Point'
                            }
                            style={styles.bodyText}
                        />
                    </View>
                </View>
                <View style={{ marginBottom: moderateScale(10) }}>
                    <View style={styles.lineContainer}>
                        <View style={styles.dot} />
                        <TextComp
                            text={'Red Valley Start Point'}
                            style={styles.heading}
                        />
                    </View>
                    <View style={styles.bodyContainer}>
                        <View style={styles.borderLine} />
                        <TextComp
                            text={
                                'Meeting Point Meeting Point Meeting Point Meeting Point Meeting Point Meeting Point Meeting Point Meeting Point Meeting Point Meeting Point Meeting Point Meeting Point Meeting Point Meeting Point Meeting Point Meeting Point Meeting Point Meeting Point'
                            }
                            style={styles.bodyText}
                        />
                    </View>
                </View>
                <TextComp
                    text={'Transportation'}
                    style={{
                        fontSize: textScale(18),
                        fontFamily: FontFamily.Poppins_SemiBold,
                        marginTop: moderateScaleVertical(10)
                    }}
                />
                <TextComp
                    text={
                        'A Private comfortable Van with a professional driver'
                    }
                    style={{
                        fontSize: textScale(14),
                        fontFamily: FontFamily.Poppins_Regular,
                    }}
                />
                <View style={{ marginBottom: 30, borderRadius: 10, elevation: 1, backgroundColor: custom_Colors.whiteColor }}>
                    <TextComp
                        text={'Scope'}
                        style={{
                            fontSize: textScale(18),
                            fontFamily: FontFamily.Poppins_SemiBold,
                            marginTop: moderateScaleVertical(10),
                            marginLeft: moderateScaleVertical(35)
                        }}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', padding: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TextComp
                                text={
                                    'Included'
                                }
                                style={{
                                    fontSize: textScale(16),
                                    fontFamily: FontFamily.Poppins_Regular,
                                    color: custom_Colors.themeColor
                                }}
                            />
                            <View style={{ paddingHorizontal: 10, paddingVertical: 1, backgroundColor: custom_Colors.themeColor, marginLeft: moderateScale(5) }}>
                                <Image source={imagePath.TickIc} style={{ width: 20, height: 20, tintColor: custom_Colors.whiteColor }} />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TextComp
                                text={
                                    'Included'
                                }
                                style={{
                                    fontSize: textScale(16),
                                    fontFamily: FontFamily.Poppins_Regular,
                                    color: custom_Colors.redColor
                                }}
                            />
                            <View style={{ paddingHorizontal: 10, paddingVertical: 1, backgroundColor: custom_Colors.redColor, marginLeft: moderateScale(5) }}>
                                <Image source={imagePath.CrossIc} style={{ width: 20, height: 20, tintColor: custom_Colors.whiteColor }} />
                            </View>
                        </View>
                    </View>
                </View>
                <TextComp
                    text={'Meeting Point'}
                    style={{
                        fontSize: textScale(18),
                        fontFamily: FontFamily.Poppins_SemiBold,
                    }}
                />
                <TextComp
                    text={
                        'Your Hotel and Airport to arrival'
                    }
                    style={{
                        fontSize: textScale(14),
                        fontFamily: FontFamily.Poppins_Regular,
                    }}
                />
                <TextComp
                    text={'Tour Videos'}
                    style={{
                        fontSize: textScale(18),
                        fontFamily: FontFamily.Poppins_SemiBold,
                        marginTop: moderateScaleVertical(10)

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
                    text={'Frequent Ask Questions'}
                    style={{
                        fontSize: textScale(18),
                        fontFamily: FontFamily.Poppins_SemiBold,
                        marginTop: moderateScaleVertical(10)

                    }}
                />
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    alignSelf: 'center',
                    padding: 10,
                    borderRadius: 10,
                    marginTop: moderateScale(15),
                    elevation: 2,
                    backgroundColor: custom_Colors.whiteColor
                }}>
                    <TextComp
                        text={
                            'A Private comfortable Van with a professional driver'
                        }
                        style={{
                            fontSize: textScale(12),
                            fontFamily: FontFamily.Poppins_Regular,
                        }}
                    />
                    <Image source={imagePath.ForwardIc} style={{ tintColor: custom_Colors.blackColor, width: 20, height: 20 }} />
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    alignSelf: 'center',
                    padding: 10,
                    borderRadius: 10,
                    marginTop: moderateScale(15),
                    elevation: 2,
                    backgroundColor: custom_Colors.whiteColor,
                    marginVertical: moderateScale(15)
                }}>
                    <TextComp
                        text={
                            'A Private comfortable Van with a professional driver'
                        }
                        style={{
                            fontSize: textScale(12),
                            fontFamily: FontFamily.Poppins_Regular,
                        }}
                    />
                    <Image source={imagePath.ForwardIc} style={{ tintColor: custom_Colors.blackColor, width: 20, height: 20 }} />
                </View>

            </ScrollView>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: moderateScale(75), // Fixed height for the footer
                backgroundColor: '#F7F7F9',
                alignItems: 'center',
                borderTopRightRadius: 30,
                borderTopLeftRadius: 30,
            }}>
                <TextComp
                    text='$ 59'
                    style={{
                        fontSize: textScale(30),
                        fontFamily: FontFamily.Poppins_Bold,
                        marginLeft: moderateScale(50)
                    }}
                />
                <ButtonComp
                    onPress={() => Alert.alert('Coming Soon')}
                    text='Book Now'
                    style={{
                        width: moderateScale(120),
                        height: moderateScale(42),
                        marginRight: moderateScale(30)
                    }}
                />

            </View>

        </WrapperContainer>
    )
}

export default TourFeatures

const styles = StyleSheet.create({

    LogoStyle: {
        width: '100%',
        height: '35%',
        borderBottomRightRadius: moderateScale(30),
        borderBottomLeftRadius: moderateScale(30),
    },
    profileStyle: {
        width: moderateScale(60),
        height: moderateScale(60),
        borderRadius: 50,
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
    container: {
    },
    lineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: 'black',
        marginRight: 10,
    },
    heading: {
        fontSize: textScale(14),
        fontFamily: FontFamily.Poppins_SemiBold,
        marginTop: moderateScaleVertical(10),
    },
    bodyContainer: {
        flexDirection: 'row',
        // alignItems: 'flex-start',
        // marginTop: moderateScaleVertical(10),
    },
    borderLine: {
        borderLeftWidth: 2,
        borderLeftColor: 'black',
        height: '100%',
        marginRight: 15,
    },
    bodyText: {
        fontSize: textScale(11),
        fontFamily: FontFamily.Poppins_Regular,
        flex: 1,
    },
    defaultText: {
        color: 'black',
    },
})