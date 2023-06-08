import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import React from 'react';
import {DetailsScreen, HomeScreen, QrScreen} from '../screens';

export type RootStackParamList = {
  HomeScreen: undefined;
  DetailsScreen: {} | undefined;
  QrScreen: {} | undefined;
};

export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

const Stack = createStackNavigator();

export function RootStack() {
  return (
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="QrScreen" component={QrScreen} />
      </Stack.Navigator>
  );
}
