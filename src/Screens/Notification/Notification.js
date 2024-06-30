import { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import WrapperContainer from '../../Components/WrapperContainer'
import TextComp from '../../Components/TextComp'
import HeaderComp from '../../Components/HeaderComp'
import { custom_Colors } from '../../styles/colors'
import imagePath from '../../constants/imagePath'
import { moderateScale, moderateScaleVertical, textScale } from '../../styles/responsiveSize'
import FontFamily from '../../styles/FontFamily'

const Notification = () => {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello developer!',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ]);
    }, []);

    const onSend = (newMessages = []) => {
        setMessages((previousMessages) => GiftedChat.append(previousMessages, newMessages));
    };
    return (
        <WrapperContainer>
            <HeaderComp
                centerText={'Message'}
                rightImage={imagePath.DotIc}
                rightStyle={{
                    tintColor: custom_Colors.blackColor,
                    width: 18,
                    height: 18
                }}
            />
            <ScrollView style={{ margin: moderateScaleVertical(16) }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: moderateScaleVertical(15) }}>
                    <TextComp
                        text='Message'
                        style={{
                            fontSize: textScale(18),
                            fontFamily: FontFamily.Poppins_SemiBold
                        }}
                    />
                    <Image source={imagePath.NewEditIc} style={{
                        tintColor: custom_Colors.blackColor,
                        width: 25,
                        height: 25
                    }} />
                </View>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 10,
                    borderRadius: 15,
                    marginVertical: moderateScaleVertical(20),
                    marginHorizontal: moderateScale(2),
                    backgroundColor: custom_Colors.whiteColor,
                    elevation: 3
                }}>
                    <Image source={imagePath.SearchIc} style={{
                        tintColor: custom_Colors.blackColor,
                        width: 20,
                        height: 20,
                    }} />
                    <TextComp
                        text='Search for chat & messages'
                        style={{
                            fontSize: textScale(14),
                            fontFamily: FontFamily.Poppins_Regular,
                            marginLeft: moderateScaleVertical(10)
                        }}
                    />
                </View>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: moderateScaleVertical(15)
                    }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }} >
                        <Image
                            source={imagePath.ProfileImg}
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 25
                            }} />
                        <View>
                            <TextComp
                                text='Mazhar Ud Din'
                                style={{
                                    fontSize: textScale(16),
                                    fontFamily: FontFamily.Poppins_SemiBold,
                                    marginLeft: moderateScaleVertical(10)
                                }}
                            />
                            <TextComp
                                text='Search for chat & messages'
                                style={{
                                    fontSize: textScale(12),
                                    fontFamily: FontFamily.Poppins_Regular,
                                    marginLeft: moderateScaleVertical(10)
                                }}
                            />
                        </View>

                    </View>
                    <TextComp
                        text='9:45'
                        style={{
                            fontSize: textScale(10),
                            fontFamily: FontFamily.Poppins_Regular,
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: moderateScaleVertical(15)
                    }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }} >
                        <Image
                            source={imagePath.ProfileImg}
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 25
                            }} />
                        <View>
                            <TextComp
                                text='Mazhar Ud Din'
                                style={{
                                    fontSize: textScale(16),
                                    fontFamily: FontFamily.Poppins_SemiBold,
                                    marginLeft: moderateScaleVertical(10)
                                }}
                            />
                            <TextComp
                                text='Search for chat & messages'
                                style={{
                                    fontSize: textScale(12),
                                    fontFamily: FontFamily.Poppins_Regular,
                                    marginLeft: moderateScaleVertical(10)
                                }}
                            />
                        </View>

                    </View>
                    <TextComp
                        text='9:45'
                        style={{
                            fontSize: textScale(10),
                            fontFamily: FontFamily.Poppins_Regular,
                        }}
                    />
                </TouchableOpacity>
            </ScrollView>

            {/* <View style={styles.container}>
                <GiftedChat
                    messages={messages}
                    onSend={(messages) => onSend(messages)}
                    user={{
                        _id: 1,
                    }}
                />
            </View> */}
        </WrapperContainer>
    )
}

export default Notification

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})