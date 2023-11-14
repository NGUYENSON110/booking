import * as React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../homeScreen/homeScreen';
import BookingScreen from '../bookingScreen/bookingScreen';
import ProfileScreen from '../ProfileScreen/profileScreen';
import SavedScreen from '../SavedScreen/savedScreen';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Feather from "react-native-vector-icons/Feather"
import Ionicons from "react-native-vector-icons/Ionicons"



const bottomTabs = () => {
    const Tab = createBottomTabNavigator();
    const stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} options={{
                    tabBarLabel: "Home", 
                    headerShown: false, 
                    title:"Booking.com",
                    headerTitleAlign:"center",
                    headerTitleStyle:{
                        fontSize:20,
                        fontWeight:"bold",
                        color:"white",
                        // shadowColor: 'rgba(0, 0, 0, 0.5)',
                        // shadowOffset: { width: 0, height: 2 },
                        // shadowOpacity: 0.8,
                        // shadowRadius: 4,
                        // elevation: 5,
                    },
                    headerStyle:{
                        backgroundColor:"#003580",
                        height:110,
                    },
                    headerRight: () =>(
                        <Ionicons name="notifications-outline" 
                        size={24} 
                        color="white" 
                        style={{marginRight: 12}}
                        />
                    ),
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    )
                }} />
                <Tab.Screen name="Saved" component={SavedScreen} options={{
                    tabBarLabel: "Saved", headerShown: false, tabBarIcon: ({ color }) => (
                        <Feather name="heart" color={color} size={26} />
                    )
                }} />
                <Tab.Screen name="Booking" component={BookingScreen} options={{
                    tabBarLabel: "Booking", headerShown: false, tabBarIcon: ({ color }) => (
                        <Ionicons name="notifications" color={color} size={26} />
                    )
                }} />
                <Tab.Screen name="Profile" component={ProfileScreen} options={{
                    tabBarLabel: "Profile", headerShown: false, tabBarIcon: ({ color }) => (
                        <Feather name="user" color={color} size={26} />
                    )
                }} />
            </Tab.Navigator>
        </NavigationContainer>

    )
}

export default bottomTabs