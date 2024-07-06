import React, { useCallback, useState } from 'react';
import { View, StyleSheet, Alert, ScrollView, TouchableOpacity, Image, Text } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';
import WrapperContainer from '../../Components/WrapperContainer'
import { custom_Colors } from '../../styles/colors';
import { moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize';
import HeaderComp from '../../Components/HeaderComp';
import imagePath from '../../constants/imagePath';
import FontFamily from '../../styles/FontFamily';
import TextComp from '../../Components/TextComp';
import { FlashList } from '@shopify/flash-list';

const Search = () => {
    const events = [
        { date: '2023-07-01' },
        { date: '2023-07-05' },
        { date: '2023-07-10' },
    ];

    // Mark dates with events
    const markedDates = events.map(event => ({
        date: moment(event.date),
        dots: [{ color: 'red', selectedDotColor: 'blue' }],
    }));

    const [posts, setPosts] = useState([
        {}, {}, {}
    ])
    const renderItem = useCallback(({ item, index }) => {
        return (
            <TouchableOpacity activeOpacity={0} onPress={() => Alert.alert('Coming Soon')}>
                <View style={styles.boxStyle}>
                    <View style={styles.ImgContainer}>
                        <Image source={imagePath.DestinationImg} style={{ width: 60, height: 60, borderRadius: 10 }} />
                        <View style={{ marginLeft: moderateScaleVertical(10) }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={imagePath.CalenderIc} style={{ height: 18, width: 18, tintColor: custom_Colors.blackColor }} />
                                <TextComp
                                    text={'26 january 2024'}
                                    style={{
                                        fontSize: textScale(12),
                                        fontFamily: FontFamily.Poppins_Regular,
                                        marginLeft: moderateScaleVertical(8)
                                    }}
                                />
                            </View>
                            <TextComp
                                text={'High Rich Park'}
                                style={{
                                    fontSize: textScale(12),
                                    fontFamily: FontFamily.Poppins_Regular,
                                    marginVertical: moderateScale(5)
                                }}
                            />
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={imagePath.LocationIc} style={{ height: 18, width: 18, tintColor: custom_Colors.blackColor }} />

                                <TextComp
                                    text={'Zero Point sylhet'}
                                    style={{
                                        fontSize: textScale(12),
                                        fontFamily: FontFamily.Poppins_Regular,
                                        marginLeft: moderateScaleVertical(8)

                                    }}
                                />
                            </View>
                        </View>
                    </View>

                    <Image source={imagePath.ForwardIc} style={{ height: 20, width: 20, tintColor: custom_Colors.blackColor }} />
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
                centerText={'Schedule'}
                rightImage={imagePath.NotificationIc}
                rightStyle={{
                    tintColor: custom_Colors.blackColor,
                    width: 18,
                    height: 18
                }}
                style={{marginTop:moderateScaleVertical(5)}}
            />
            <View style={styles.container}>
                <View style={styles.calendarContainer}>
                    <CalendarStrip
                        scrollable
                        style={styles.calendar}
                        calendarColor={custom_Colors.themeColor}
                        calendarHeaderStyle={{
                            color: custom_Colors.blackColor,
                            alignSelf: 'flex-start',
                            fontSize: textScale(16), // Example font size
                        }}
                        dateNumberStyle={{ color: custom_Colors.blackColor }}
                        dateNameStyle={{ color: custom_Colors.blackColor, fontFamily: FontFamily.Poppins_Regular, fontSize: textScale(12) }}
                        highlightDateNumberStyle={{ color: custom_Colors.themeColor }}
                        highlightDateNameStyle={{ color: custom_Colors.themeColor }}
                        selectedDate={moment()}
                        markedDates={markedDates}
                    />
                </View>
            </View>
            <ScrollView style={{ margin: moderateScaleVertical(16), flex: 0.8 }}>
                <View style={styles.Destination}>
                    <TextComp
                        text={'My Schedule'}
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
                    contentContainerStyle={{}}
                  showsVerticalScrollIndicator={false}
                />
            </ScrollView>

        </WrapperContainer>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    calendar: {
        height: 100,
        padding: 16,
        paddingBottom: 10,
        marginTop: moderateScaleVertical(15),
        borderRadius: 20,
        marginHorizontal: moderateScale(10),
        backgroundColor: custom_Colors.whiteColor,
        elevation: 5
    },
    calendarContainer: {
        flex: 1, // Ensures that the calendarContainer takes up available space
        width: '100%', // Makes sure it takes the full width of the screen
    },
    Destination: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    boxStyle: {
        backgroundColor: custom_Colors.whiteColor,
        borderRadius: moderateScale(8),
        padding: moderateScale(8),
        elevation: 5,
        margin: moderateScale(8),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
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