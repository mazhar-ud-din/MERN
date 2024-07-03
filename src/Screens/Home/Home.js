import { FlashList } from '@shopify/flash-list'
import React, { useCallback, useState } from 'react'
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native'
import TextComp from '../../Components/TextComp'
import WrapperContainer from '../../Components/WrapperContainer'
import navigationStrings from '../../Navigations/navigationStrings'
import imagePath from '../../constants/imagePath'
import FontFamily from '../../styles/FontFamily'
import { custom_Colors } from '../../styles/colors'
import { moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize'
import styles from './styles'
import { Rating } from 'react-native-ratings'

const Home = ({ navigation }) => {
    const [posts, setPosts] = useState([
        {}, {}, {}
    ])
    const renderItem = useCallback(({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.TOURFEATURES)} activeOpacity={0}>
                <View style={styles.boxStyle}>
                    <View style={styles.ImgContainer}>
                        <Image source={imagePath.DestinationImg} />
                    </View>
                    <View style={styles.TextCard}>
                        <TextComp
                            text={'Turkey'}
                            style={{
                                fontFamily: FontFamily.Poppins_Regular,
                                fontSize: textScale(16)
                            }}
                        />
                        <View style={styles.TextCardLeft}>
                            <Rating
                                type='star'
                                ratingCount={5}
                                imageSize={10}
                                startingValue={5}
                            // showRating
                            // onFinishRating={ratingCompleted}
                            />
                            <TextComp
                                text={'4.7'}
                                style={{
                                    fontFamily: FontFamily.Poppins_Regular,
                                    fontSize: textScale(16),
                                }}
                            />
                        </View>
                    </View>
                    <View style={styles.BottomCardContainer}>
                        <View style={styles.BottomCardLeft} >
                            <Image
                                source={imagePath.LocationIc}
                                style={styles.BottomLeftImg} />
                            <TextComp
                                text={'Tekergate,Sunamang'}
                                style={{
                                    fontFamily: FontFamily.Poppins_Regular,
                                    fontSize: textScale(16)
                                }}
                            />
                        </View>
                        <View style={styles.BottomCardLeft}>
                            <Image
                                source={imagePath.UserIc}
                                style={styles.BottomLeftImg} />
                            <Image
                                source={imagePath.UserIc}
                                style={styles.BottomLeftImg} />
                        </View>
                    </View>
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
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <View style={styles.LeftHeader}>
                        <Image source={imagePath.UserIc} style={styles.LeftImg} />
                        <TextComp
                            text={'Mazhar ud din'}
                            style={{
                                fontSize: textScale(14),
                                marginTop: moderateScaleVertical(5)
                            }}
                        />
                    </View>
                    <View style={styles.rightHeader}>
                        <Image source={imagePath.NotificationIc} style={{ tintColor: custom_Colors.blackColor }} />
                    </View>
                </View>
                <TextComp
                    text={'Explore The'}
                    style={{
                        fontSize: textScale(30),
                        fontFamily: FontFamily.Poppins_Regular,
                        marginTop: moderateScaleVertical(40)
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
                <View style={styles.Destination}>
                    <TextComp
                        text={'Best Destination'}
                        style={{
                            fontSize: textScale(20),
                            fontFamily: FontFamily.Poppins_Regular,
                            marginVertical: moderateScale(28),
                        }}
                    />
                    <TextComp
                        text={'View all'}
                        onPress={() => Alert.alert('Coming Soon')}
                        style={{
                            color: custom_Colors.blueColor,
                            fontSize: textScale(14),
                            fontFamily: FontFamily.Poppins_Regular,
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
            </View>
        </WrapperContainer>
    )
}

export default Home
