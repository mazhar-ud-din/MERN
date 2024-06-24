//import liraries
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { custom_Colors } from '../styles/colors';
// import { useSelector } from 'react-redux';

// create a component
const WrapperContainer = ({
    style = {},
    children
}) => {
    // const { selectedTheme } = useSelector(state => state?.appSetting)

    return (
        <View style={{
            ...styles.container,
            ...style,
            // backgroundColor: selectedTheme == 'dark' ? colors.themeColor : colors.whiteColor
        }}>
            <StatusBar barStyle={'light-content'} backgroundColor={custom_Colors.themeColor}/>
            <SafeAreaView style={{ flex: 1 }}>
                {children}
            </SafeAreaView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: custom_Colors.whiteColor
    },
});

//make this component available to the app
export default WrapperContainer;
