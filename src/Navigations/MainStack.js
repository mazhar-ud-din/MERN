import React from "react";
import { EditProfile, GuideProfile, TourFeatures } from "../Screens/Index";
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