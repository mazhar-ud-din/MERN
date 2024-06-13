import React from "react";
import navigationStrings from "./navigationStrings";
import TabRoutes from './TabRoutes';
import { InitialScreen } from "../Screens/Index";

export default function (Stack) {
    return (
        <>
            <Stack.Screen
                name={navigationStrings.GET_START}
                component={InitialScreen}
                options={{ headerShown: false }}

            />
            {/* 
            <Stack.Screen
                name={navigationStrings.TAB_ROUTES}
                component={TabRoutes}
                options={{ headerShown: false }}

            /> */}

            {/* <Stack.Screen
                name={navigationStrings.LINKS}
                component={Screens.Links}
                options={{ headerShown: false }}

            />

            <Stack.Screen
                name={navigationStrings.POST_DETAIL}
                component={Screens.PostDetail}
                options={{ headerShown: false }}

            />
            <Stack.Screen
                name={navigationStrings.ADD_POST}
                component={Screens.AddPost}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={navigationStrings.CHATS}
                component={Screens.Chats}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={navigationStrings.MESSAGES}
                component={Screens.Messages}
                options={{ headerShown: false }}
            /> */}

        </>
    );
}