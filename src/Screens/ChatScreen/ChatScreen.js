import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Composer, GiftedChat, InputToolbar, Send } from 'react-native-gifted-chat';
import HeaderComp from '../../Components/HeaderComp';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import { custom_Colors } from '../../styles/colors';
import FontFamily from '../../styles/FontFamily';
import { textScale } from '../../styles/responsiveSize';

const ChatScreen = () => {

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
                    avatar: imagePath.ProfileImg,
                },
            },
        ]);
    }, []);

    const onSend = (newMessages = []) => {
        setMessages((previousMessages) => GiftedChat.append(previousMessages, newMessages));
    };

    const renderCustomInputToolbar = (props) => {
        return (
            <InputToolbar
                {...props}
                containerStyle={styles.inputToolbar}
                primaryStyle={{ alignItems: 'center' }}
                renderComposer={(composerProps) => (
                    <Composer
                        {...composerProps}
                        textInputStyle={{ fontFamily: FontFamily.Poppins_Regular, fontSize: textScale(14), color: custom_Colors.blackColor }}
                        placeholderTextColor={custom_Colors.blackOpacity70} // Custom placeholder text color
                    />
                )}
            />
        );
    };

    // Custom Send Button
    const renderCustomSend = (props) => {
        return (
            <Send {...props}>
                <View style={styles.sendingContainer}>
                    <Image source={imagePath.SendIc} style={{ width: 25, height: 25, tintColor: custom_Colors.themeColor }} />
                    {/* <Ionicons name="send" size={24} color="blue" /> */}
                </View>
            </Send>
        );
    };
    return (
        <WrapperContainer>
            <HeaderComp
                centerText={'Mazhar Ud din'}
                rightImage={imagePath.PhoneIc}
                rightStyle={{
                    tintColor: custom_Colors.blackColor,

                }}
            />
            <View style={styles.container}>
                <GiftedChat
                    messages={messages}
                    onSend={(messages) => onSend(messages)}
                    renderInputToolbar={renderCustomInputToolbar}
                    renderSend={renderCustomSend}
                    user={{
                        _id: 1,
                    }}
                />
            </View>
        </WrapperContainer>

    )
}

export default ChatScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputToolbar: {
        // borderTopWidth: 1,
        // borderTopColor: '#e4e4e4',
        backgroundColor: '#f8f8f8',
        borderRadius: 20,
        // marginHorizontal: 10,
        marginBottom: 10,
        // padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    sendingContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 44,
        width: 44,
        marginRight: 10,
        marginBottom: 5,
    },
})