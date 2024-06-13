import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from 'react';
import { Text } from 'react-native';
import AuthStack from './AuthStack';
import MainStack from './MainStack';


const Stack = createNativeStackNavigator();




export default function Routes() {


  return (
    <NavigationContainer >
      <Stack.Navigator>
        {AuthStack(Stack)}
        {/* {!!userData?.token ?  MainStack(Stack):AuthStack(Stack)}      */}

      </Stack.Navigator>

    </NavigationContainer>
  );
}