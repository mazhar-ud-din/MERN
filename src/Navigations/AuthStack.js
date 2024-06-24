import React from "react";
import navigationStrings from "./navigationStrings";
import { InitialScreen, Login, Otp, Signup } from "../Screens/Index";

export default function (Stack) {
    return (
        <>
            <Stack.Screen
                name={navigationStrings.GET_START}
                component={InitialScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={navigationStrings.LOGIN}
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={navigationStrings.SIGNUP}
                component={Signup}
                options={{ headerShown: false }}
            />
             <Stack.Screen
                name={navigationStrings.OTP_VERIFICATION}
                component={Otp}
                options={{ headerShown: false }}
            />


            {/* <Stack.Screen
                name={navigationStrings.LOGIN}
                component={Screens.Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={navigationStrings.SIGNUP}
                component={Screens.Signup}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={navigationStrings.OTP_VERIFICATION}
                component={Screens.OtpVerification}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={navigationStrings.WEBVIEW}
                component={Screens.Webview}
                options={{ headerShown: false }}
            /> */}

        </>
    );
}