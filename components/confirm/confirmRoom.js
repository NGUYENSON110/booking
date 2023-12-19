import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux'
import { savedPlaces } from '../reduxStore/reducers';

const ConfirmRoom = () => {
    const dispatch = useDispatch();
  const route = useRoute();
  const navigation = useNavigation();
//   console.log('rout5', route?.params.route?.params.route.params.route.params);
const confirmBooking = () =>{
    dispatch(savedPlaces(route?.params));
    navigation.navigate("Home")
}
  return (
    <View>
      <Pressable style={{backgroundColor: 'white', margin: 10}}>
        <View
          style={{
            marginHorizontal: 12,
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}>
              {
                route?.params.route?.params.route.params.route.params.property
                  .name
              }
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 6,
                marginTop: 7,
              }}>
              <MaterialIcons name="stars" size={24} color="green" />
              <Text>
                {
                  route?.params.route?.params.route.params.route.params.property
                    .rating
                }
              </Text>
              <View
                style={{
                  backgroundColor: '#003580',
                  paddingVertical: 3,
                  borderRadius: 5,
                  width: 120,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'white',
                    fontSize: 15,
                  }}>
                  Điểm Đánh Giá
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              backgroundColor: '#17B169',
              paddingHorizontal: 6,
              paddingVertical: 4,
              borderRadius: 6,
            }}>
            <Text style={{color: 'white', fontSize: 13}}>
              Trạng thái còn phòng
            </Text>
          </View>
        </View>

        <View
          style={{
            margin: 12,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 60,
          }}>
          <View>
            <Text style={{fontSize: 16, fontWeight: '600', marginBottom: 3}}>
              Check In
            </Text>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#007FFF'}}>
              {route?.params.route?.params.route.params.route.params.info
                    .hienthingaydi}
            </Text>
          </View>

          <View>
            <Text style={{fontSize: 16, fontWeight: '600', marginBottom: 3}}>
              Check Out
            </Text>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#007FFF'}}>
            {route?.params.route?.params.route.params.route.params.info
                    .hienthingayve}
            </Text>
          </View>
        </View>
        <View style={{margin: 12}}>
          <Text style={{fontSize: 16, fontWeight: '600', marginBottom: 3}}>
            Rooms and Guests
          </Text>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#007FFF'}}>
            {route?.params.route?.params.route.params.route.params.info
                    .rooms} rooms {route?.params.route?.params.route.params.route.params.info
                        .adults
                    } adults{' '}
            {route?.params.route?.params.route.params.route.params.info
                        .children
                    } children
          </Text>
        </View>

        <Pressable
          onPress={confirmBooking}
          style={{
            backgroundColor: '#003580',
            width: 120,
            padding: 5,
            marginHorizontal: 12,
            marginBottom: 20,
            borderRadius: 4,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            Book Now
          </Text>
        </Pressable>
      </Pressable>
    </View>
  );
};

export default ConfirmRoom;
