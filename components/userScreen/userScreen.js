import {View, Text, TextInput, Pressable, Alert} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';

const UserScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const route = useRoute();
  const navigation = useNavigation();
//   console.log('route4', route);

  const buttonConfirm = (firstName,lastName,email,phone) =>{
    if(firstName===''|| lastName==='' || email === '' || phone === ''){
        Alert.alert("Xin vui lòng điền đầy đủ thông tin")
    }
    navigation.navigate("confirmRoom",{
        route:route,
        firstName:firstName,
        lastName:lastName,
        email:email,
        phone:phone
    })
  }
  return (
    <View style={{padding: 20}}>
      <View style={{flexDirection: 'column', gap: 10}}>
        <Text>First Name</Text>
        <TextInput
          value={firstName}
          onChangeText={text => setFirstName(text)}
          style={{padding: 10, borderColor: 'gray', borderWidth: 1}}
        />
      </View>

      <View style={{flexDirection: 'column', gap: 10}}>
        <Text>Last Name</Text>
        <TextInput
          value={lastName}
          onChangeText={text => setLastName(text)}
          style={{padding: 10, borderColor: 'gray', borderWidth: 1}}
        />
      </View>

      <View style={{flexDirection: 'column', gap: 10}}>
        <Text>Email</Text>
        <TextInput
          value={email}
          onChangeText={text => setEmail(text)}
          style={{padding: 10, borderColor: 'gray', borderWidth: 1}}
        />
      </View>

      <View style={{flexDirection: 'column', gap: 10}}>
        <Text>Phone</Text>
        <TextInput
          value={phone}
          onChangeText={text => setPhone(text)}
          style={{padding: 10, borderColor: 'gray', borderWidth: 1}}
        />
      </View>

      <View
        style={{
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 30,
          borderRadius: 10,
        }}>
        <View style={{flexDirection:'row', padding: 10,}}>
          <Text
            style={{
              fontSize: 16,
              color: 'red',
              textDecorationLine: 'line-through',
            }}>
            {route?.params.route.params.route.params.property.oldPrice} VND
          </Text>
          <Text style={{fontSize: 18, marginLeft: 10,color:"black"}}>{route?.params.route.params.route.params.property.newPrice} VND</Text> 
        </View>

        <View style={{flexDirection:"row", alignItems:"center", justifyContent:'center', marginRight: 15}}>
            <Pressable style={{backgroundColor:"#007FFF", padding: 10, borderRadius: 10,}} onPress={() =>buttonConfirm(firstName,lastName,email,phone)}>
                <Text style={{color:"white"}}>Confirm</Text>
            </Pressable>
        </View>
      </View>
    </View>
  );
};

export default UserScreen;
