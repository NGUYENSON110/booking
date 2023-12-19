import * as React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../homeScreen/homeScreen';
import BookingScreen from '../bookingScreen/bookingScreen';
import ProfileScreen from '../ProfileScreen/profileScreen';
import SavedScreen from '../SavedScreen/savedScreen';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import searchSreen from '../searchScreen/searchSreen';
import Place from '../place/place';
import Map from '../mapScreen/map';
import PropertyInfoScreen from '../propertyInfoScreen/propertyInfoScreen';
import UserScreen from '../userScreen/userScreen';
import RoomScreen from '../roomScreen/roomScreen';
import ConfirmRoom from '../confirm/confirmRoom';

const bottomTabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            headerShown: false,
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="home" color={color} size={28} />
            ),
          }}
        />
        <Tab.Screen
          name="Saved"
          component={SavedScreen}
          options={{
            tabBarLabel: 'Saved',
            headerShown: false,
            tabBarIcon: ({color}) => (
              <Feather name="heart" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Booking"
          component={BookingScreen}
          options={{
            tabBarLabel: 'Booking',
            headerShown: false,
            tabBarIcon: ({color}) => (
              <Ionicons name="notifications" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            headerShown: false,
            tabBarIcon: ({color}) => (
              <Feather name="user" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const HomeStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      // screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          // tabBarLabel: "Home",
          headerShown: true,
          title: 'Booking.com',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
            // shadowColor: 'rgba(0, 0, 0, 0.5)',
            // shadowOffset: { width: 0, height: 2 },
            // shadowOpacity: 0.8,
            // shadowRadius: 4,
            // elevation: 5,
          },

          headerStyle: {
            backgroundColor: '#003580',
            height: 110,
          },
          // header: () => (
          //     <View style={{ height: 100, flexDirection: "row", justifyContent: 'center', alignItems: 'center', backgroundColor: "#003580", }}>
          //         <Text style={{
          //             fontSize: 20,
          //             fontWeight: "bold",
          //             color: "white",
          //         }}>
          //             Booking.com
          //             </Text>
          //     </View>
          // ),
          headerRight: () => (
            <View
              style={{
                height: 110,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Ionicons
                name="notifications-outline"
                size={24}
                color="white"
                style={{marginRight: 12}}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="Sreach"
        component={searchSreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Place"
        component={Place}
        options={{
          // headerShown: false,
          title: 'Popular Places',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
            // shadowColor: 'rgba(0, 0, 0, 0.5)',
            // shadowOffset: { width: 0, height: 2 },
            // shadowOpacity: 0.8,
            // shadowRadius: 4,
            // elevation: 5,
          },

          headerStyle: {
            backgroundColor: '#003580',
            height: 110,
          },
        }}
      />

      <Stack.Screen name="Map" component={Map} options={{headerShown: false}} />
      <Stack.Screen
        name="Info"
        component={PropertyInfoScreen}
        options={{
          // headerShown: false,
          title: 'Info Place',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
            // shadowColor: 'rgba(0, 0, 0, 0.5)',
            // shadowOffset: { width: 0, height: 2 },
            // shadowOpacity: 0.8,
            // shadowRadius: 4,
            // elevation: 5,
          },

          headerStyle: {
            backgroundColor: '#003580',
            height: 110,
          },
        }}
      />

      <Stack.Screen
        name="roomScreen"
        component={RoomScreen}
        options={{
          // headerShown: false,
          title: 'Room',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
            // shadowColor: 'rgba(0, 0, 0, 0.5)',
            // shadowOffset: { width: 0, height: 2 },
            // shadowOpacity: 0.8,
            // shadowRadius: 4,
            // elevation: 5,
          },

          headerStyle: {
            backgroundColor: '#003580',
            height: 110,
          },
        }}
      />

      <Stack.Screen
        name="userScreen"
        component={UserScreen}
        options={{
          // headerShown: false,
          title: 'User Details',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
            // shadowColor: 'rgba(0, 0, 0, 0.5)',
            // shadowOffset: { width: 0, height: 2 },
            // shadowOpacity: 0.8,
            // shadowRadius: 4,
            // elevation: 5,
          },

          headerStyle: {
            backgroundColor: '#003580',
            height: 110,
          },
        }}
      />

      <Stack.Screen
        name="confirmRoom"
        component={ConfirmRoom}
        options={{
          // headerShown: false,
          title: 'ConfirmRoom',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
            // shadowColor: 'rgba(0, 0, 0, 0.5)',
            // shadowOffset: { width: 0, height: 2 },
            // shadowOpacity: 0.8,
            // shadowRadius: 4,
            // elevation: 5,
          },

          headerStyle: {
            backgroundColor: '#003580',
            height: 110,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default bottomTabs;
