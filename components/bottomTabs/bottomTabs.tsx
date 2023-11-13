import * as React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../homeScreen/homeScreen';
import BookingScreen from '../bookingScreen/bookingScreen';
import ProfileScreen from '../ProfileScreen/profileScreen';
import SavedScreen from '../SavedScreen/savedScreen';
import { NavigationContainer } from '@react-navigation/native';



const bottomTabs = () => {
    const Tab = createBottomTabNavigator();
    const stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: "Home" }} />
                <Tab.Screen name="Booking" component={BookingScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
                <Tab.Screen name="Saved" component={SavedScreen} />
            </Tab.Navigator>
        </NavigationContainer>

    )
}

export default bottomTabs