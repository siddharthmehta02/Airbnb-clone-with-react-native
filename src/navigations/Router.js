/* eslint-disable prettier/prettier */
import React from 'react'


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DestinationScreen from '../screens/DestinationSearch/index'
import GuestScreen from '../screens/Guest';
import HomeTabNavigator from './HomeTabNavigator';

const Stack = createStackNavigator()


const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>

            <Stack.Screen
                    name={"Home"}
                    component={HomeTabNavigator}
                    options={{
                        headerShown:false
                    }}
                />

                <Stack.Screen
                    name={"DestinationSearch"}
                    component={DestinationScreen}
                    options={{
                        title: "Search your destination"
                    }}
                />

                <Stack.Screen
                    name={"GuestScreen"}
                    component={GuestScreen}
                    options={{
                        title: "How many people?"
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Router