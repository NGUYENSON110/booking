import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Pressable,
  Image,
} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const PropertyInfoScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  console.log('route', route);
  console.log('aaaaaaaa');
  const service = [
    {
      id: '1',
      tittle: 'Miễn phí wifi',
    },
    {
      id: '2',
      tittle: 'Miễn phí bữa ăn sáng',
    },
    {
      id: '3',
      tittle: 'Miễn phí bể bơi',
    },
    {
      id: '4',
      tittle: 'Miễn phí tập gym',
    },
    {
      id: '5',
      tittle: 'Miễn phí đạp xe',
    },
    {
      id: '6',
      tittle: 'Miễn phí nước uống trong phòng',
    },
    {
      id: '7',
      tittle: 'Family rooms',
    },
  ];
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <Pressable style={{flexDirection: 'row', flexWrap: 'wrap', margin: 10}}>
          {route?.params.property.photos.map(photo => (
            <View style={{margin: 6}}>
              <Image
                source={{uri: photo.image}}
                style={{width: 80, height: 80, borderRadius: 5}}
              />
            </View>
          ))}
          <Pressable style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{textAlign: 'center', marginLeft: 20}}>Show more</Text>
          </Pressable>
        </Pressable>

        <View style={{marginLeft: 15}}>
          <View>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              {route.params.property.name}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 6,
                marginTop: 7,
              }}>
              <MaterialIcons name="stars" size={24} color="green" />
              <Text>{route.params.property.rating}</Text>
              <View
                style={{
                  backgroundColor: '#6CB4EE',
                  paddingVertical: 3,
                  borderRadius: 5,
                  width: 100,
                }}>
                <Text
                  style={{textAlign: 'center', color: 'white', fontSize: 15}}>
                  Điểm đánh giá
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Text
          style={{
            borderColor: '#E0E0E0',
            borderWidth: 3,
            height: 1,
            marginTop: 15,
          }}></Text>

        <View>
          <View
            style={{
              marginTop: 5,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
              marginLeft: 15,
            }}>
            <Text
              style={{
                color: 'red',
                fontSize: 18,
                textDecorationLine: 'line-through',
              }}>
              {route.params.property.oldPrice * route.params.info.adults}
            </Text>
            <Text style={{fontSize: 18}}>
              {route.params.property.newPrice * route.params.info.adults} VND
            </Text>
          </View>
          <Text
            style={{
              marginTop: 4,
              fontSize: 15,
              fontWeight: '500',
              marginLeft: 15,
            }}>
            Giá 1 đêm và {route.params.info.adults} người lớn{' '}
          </Text>
          <Text
            style={{
              marginTop: 6,
              color: 'gray',
              fontWeight: 'bold',
              marginLeft: 15,
            }}>
            {route.params.property.address.length > 50
              ? route.params.property.address.substring(0, 50)
              : route.params.property.address}
          </Text>

          <View
            style={{
              marginLeft: 15,
              borderRadius: 5,
              width: 80,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 10,
              backgroundColor: 'green',
            }}>
            <Text style={{fontSize: 15, color: 'white', padding: 5}}>
              20% OFF
            </Text>
          </View>
        </View>

        <Text
          style={{
            borderColor: '#E0E0E0',
            borderWidth: 3,
            height: 1,
            marginTop: 15,
          }}></Text>

        <View style={{flexDirection: 'row', marginLeft: 15}}>
          <View>
            <Text style={{fontSize: 16, fontWeight: '600', marginBottom: 3}}>
              Check In
            </Text>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#007FFF'}}>
              {route?.params.info.hienthingaydi}
            </Text>
          </View>

          <View style={{marginLeft: 70}}>
            <Text style={{fontSize: 16, fontWeight: '600', marginBottom: 3}}>
              Check Out
            </Text>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#007FFF'}}>
              {route?.params.info.hienthingayve}
            </Text>
          </View>
        </View>

        <View style={{marginTop: 10, marginLeft: 15}}>
          <Text style={{fontSize: 16, fontWeight: '600', marginBottom: 3}}>
            Rooms and Guests
          </Text>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#007FFF'}}>
            {route?.params.info.rooms} rooms {route?.params.info.adults} người
            lớn {route?.params.info.children} trẻ em
          </Text>
        </View>

        <Text
          style={{
            borderColor: '#E0E0E0',
            borderWidth: 3,
            height: 1,
            marginTop: 15,
          }}></Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 10}}>
          {service.map((item, index) => (
            <View style={{marginLeft: 10}}>
              <Text
                style={{
                  backgroundColor: '#007FFF',
                  padding: 5,
                  borderRadius: 8,
                  margin: 5,
                  color: 'white',
                }}>
                {item.tittle}
              </Text>
            </View>
          ))}
        </View>

        <Pressable
          style={{
            backgroundColor: '#6CB4EE',
            marginBottom: 10,
            paddingVertical: 10,
            width: '95%',
            marginLeft: 10,
            marginTop: 5,
            borderRadius: 10,
          }}
          onPress={() =>
            navigation.navigate('roomScreen', {
              route:route,
            })
          }>
          <Text style={{textAlign: 'center', color: 'white', fontSize: 18}}>
            Select
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PropertyInfoScreen;
