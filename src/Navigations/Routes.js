import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from 'react';
import { Text } from 'react-native';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

export default function Routes() {
  const { userData } = useSelector(state => state?.auth);
  console.log(`userData`, !!userData)
  return (
    <NavigationContainer >
      <Stack.Navigator>
        {!userData ? AuthStack(Stack) : MainStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}