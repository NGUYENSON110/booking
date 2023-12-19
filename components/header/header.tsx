import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useState } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Entypo from "react-native-vector-icons/Entypo"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"


const Header = () => {
    const [checkHeader, setCheckHeader] = useState("Stays")
    const arrayHeader = [
        {
            name: "Stays",
            icon: <FontAwesome name="bed" size={24} color="white" />
        },

        {
            name: "Fights",
            icon: <Entypo name="aircraft-take-off" size={24} color="white" />
        },

        {
            name: "Car",
            icon: <FontAwesome5 name="car" size={24} color="white" />
        },

        {
            name: "Taxi",
            icon: <FontAwesome5 name="taxi" size={24} color="white" />
        },


    ]
    return (
        <View style={{
            backgroundColor: "#003580",
            height: 55, flexDirection: "row",
            justifyContent: 'space-between'
        }}>
            {
                arrayHeader.map((item, index) => (
                    <Pressable style={{
                        flexDirection: "row",
                        alignItems: "center",
                        borderWidth: 1,
                        marginTop:5,
                        marginBottom: 5,
                        borderColor: item.name === checkHeader ? "white" : "#003580",
                        borderRadius: 20,
                        padding: 8,
                    }}  
                        onPress={() =>{
                            setCheckHeader(item.name)
                        }}
                    >
                        <Text>{item.icon}</Text>
                        <Text style={{
                            marginLeft: 5,
                            fontWeight: "bold",
                            color: "white",
                            fontSize: 15,
                            padding: 3,
                        }}>{item.name}</Text>
                    </Pressable>
                ))
            }

        </View>
    )
}

export default Header

const styles = StyleSheet.create({})