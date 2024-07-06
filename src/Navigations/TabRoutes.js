import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { CreatePost, Home, Notification, Profile, Search } from '../Screens/Index';
import imagePath from '../constants/imagePath';
import navigationStrings from './navigationStrings';
import { moderateScale, moderateScaleVertical, textScale } from '../styles/responsiveSize';
import TextComp from '../Components/TextComp';


const BottomTab = createBottomTabNavigator();

const TabRoutes = (props) => {
    return (
        <BottomTab.Navigator
            tabBar={(tabsProps) => (
                <>
                    <BottomTabBar {...tabsProps} />
                </>
            )}
            initialRouteName={navigationStrings.HOME}
            screenOptions={{
                headerShown: false,
                style: styles.customBottomtabsStyle,
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: { backgroundColor: '#1FB970' },
                tabBarShowLabel: true
            }}
        >
            <BottomTab.Screen
                name={navigationStrings.HOME}
                component={Home}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <TextComp style={{ color: focused ? 'black' : 'white', fontSize: textScale(8) }} text='Home' />
                    ),
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image style={{ tintColor: focused ? 'black' : 'white' }} source={imagePath.firstInActiveIcon} />
                        );
                    },
                }}
            />
            <BottomTab.Screen
                name={navigationStrings.SEARCH}
                component={Search}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <TextComp style={{ color: focused ? 'black' : 'white', fontSize: textScale(8) }} text='Calender' />
                    ),
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image style={{ tintColor: focused ? 'black' : 'white', width: moderateScale(25), height: moderateScale(25) }} source={imagePath.CalenderIc} />
                        );
                    },
                }}
            />
            <BottomTab.Screen
                name={navigationStrings.CREATE_POST}
                component={CreatePost}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <TextComp style={{ color: focused ? 'black' : 'white', fontSize: textScale(8) }} text='Search' />
                    ),
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image style={{ tintColor: focused ? 'black' : 'white' }} source={imagePath.secondActiveIcon} />
                        );
                    },
                    unmountOnBlur: true
                }}
            />
            <BottomTab.Screen
                name={navigationStrings.NOTIFICATION}
                component={Notification}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <TextComp style={{ color: focused ? 'black' : 'white', fontSize: textScale(8) }} text='Message' />
                    ),
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image style={{ tintColor: focused ? 'black' : 'white', width: 22, height: 22 }} source={imagePath.MessageIc} />
                        );
                    },
                }}
            />
            <BottomTab.Screen
                name={navigationStrings.PROFILE}
                component={Profile}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <TextComp style={{ color: focused ? 'black' : 'white', fontSize: textScale(8) }} text='Profile' />
                    ),
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image style={{ tintColor: focused ? 'black' : 'white' }} source={imagePath.fifthActiveIcon} />
                        );
                    },
                }}
            />

        </BottomTab.Navigator>
    );
};

const styles = StyleSheet.create({
    customBottomtabsStyle: {
    },

});

export default TabRoutes