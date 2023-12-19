import React, {useState} from 'react';
import {Button, View, Text, Pressable} from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { savedPlaces, removePlaces } from '../reduxStore/reducers';
const BookingScreen = () => {
  const dispatch = useDispatch();
  const booking = useSelector(state => state);
  console.log('booking', booking);

  // const toggleXoa = (booking) =>{
  //   dispatch(removePlaces(booking));
  // }
  return (
    <View>
      {booking.booking.booking?.map((item, index) => (
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
                {item?.route.params.route.params.route.params.property.name}
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
                  {item?.route.params.route.params.route.params.property.rating}
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
                Đặt phòng thành công
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
              <Text
                style={{fontSize: 16, fontWeight: 'bold', color: '#007FFF'}}>
                {
                  item?.route.params.route.params.route.params.info
                    .hienthingaydi
                }
              </Text>
            </View>

            <View>
              <Text style={{fontSize: 16, fontWeight: '600', marginBottom: 3}}>
                Check Out
              </Text>
              <Text
                style={{fontSize: 16, fontWeight: 'bold', color: '#007FFF'}}>
                {
                  item?.route.params.route.params.route.params.info
                    .hienthingayve
                }
              </Text>
            </View>
          </View>
          <View style={{margin: 12}}>
            <Text style={{fontSize: 16, fontWeight: '600', marginBottom: 3}}>
              Rooms and Guests
            </Text>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#007FFF'}}>
              {item?.route.params.route.params.route.params.info.rooms} rooms{' '}
              {item?.route.params.route.params.route.params.info.adults} adults{' '}
              {item?.route.params.route.params.route.params.info.children}{' '}
              children
            </Text>
          </View>
          {/* <Button onPress={() =>toggleXoa(booking)} title='CLICK'>
            <Text>Xóa</Text>
          </Button> */}
        </Pressable>
      ))}
    
    </View>
  );
};

export default BookingScreen;
