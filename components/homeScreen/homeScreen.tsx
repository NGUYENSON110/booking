import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect, useState } from 'react'
import { View, Text, ScrollView, SafeAreaView, Pressable, TextInput } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../header/header';
import Feather from "react-native-vector-icons/Feather"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import DatePicker from "react-datepicker";

const HomeScreen = () => {

    const navigation = useNavigation();
    // const [startDate, setStartDate] = useState<Date | null>(new Date());;

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
        },
        )
    }, [])
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View>
                <Header />

                <ScrollView>
                    <View style={{ marginTop: 20, marginLeft: 20, marginRight: 20, borderColor: "#FFc72C", borderWidth: 3, borderRadius: 6 }}>
                        {/* Destination */}
                        <Pressable style={{ flexDirection: 'row', borderBottomColor: "red", }}>
                            <Feather name="search" size={24} color="red" style={{ marginTop: 12, marginLeft: 10, }} />
                            <TextInput placeholder='Enter your Destination' style={{ marginLeft: 10, }} />
                        </Pressable>
                    </View>

                    <View style={{ marginTop: 10, marginLeft: 20, marginRight: 20, borderColor: "#FFc72C", borderWidth: 3, borderRadius: 6 }}>
                        {/* Selected Dates */}
                        <Pressable style={{ flexDirection: 'row', borderBottomColor: "red" }}>
                            <MaterialIcons name="date-range" size={24} color="red" style={{ marginTop: 12, marginLeft: 10, }} />
                            {/* <DatePicker 
                            selected={startDate} 
                            onChange={(date) => setStartDate(date)} 
                            /> */}

                        </Pressable>
                    </View>


                    <View style={{ marginTop: 10, marginLeft: 20, marginRight: 20, borderColor: "#FFc72C", borderWidth: 3, borderRadius: 6 }}>
                        {/* Rooms and Guests */}
                        <Pressable style={{ flexDirection: 'row', borderBottomColor: "red" }}>
                            <Feather name="search" size={24} color="red" style={{ marginTop: 12, marginLeft: 10, }} />
                            <TextInput placeholder='Enter your Destination' style={{ marginLeft: 10, }} />
                        </Pressable>
                    </View>






                </ScrollView>
            </View>
        </SafeAreaView>

    )
}

export default HomeScreen