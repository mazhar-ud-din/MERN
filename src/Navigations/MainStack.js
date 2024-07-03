import React from "react";
import { ChatScreen, EditProfile, GuideProfile, TourFeatures } from "../Screens/Index";
import TabRoutes from './TabRoutes';
import navigationStrings from "./navigationStrings";

export default function (Stack) {
    return (
        <>
            <Stack.Screen
                name={navigationStrings.TAB_ROUTES}
                component={TabRoutes}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={navigationStrings.TOURFEATURES}
                component={TourFeatures}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={navigationStrings.PROFILE_EDIT}
                component={EditProfile}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={navigationStrings.GUIDE_PROFILE}
                component={GuideProfile}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={navigationStrings.CHAT_SCREEN}
                component={ChatScreen}
                options={{ headerShown: false }}
            />


        </>
    );
}