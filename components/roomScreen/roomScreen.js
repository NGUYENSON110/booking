import {View, Text, SafeAreaView, ScrollView, Pressable} from 'react-native';
import React, {useState} from 'react';
import {useRoute} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const RoomScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  console.log('route222', route);
  const [select, setSlected] = useState();
  return (
    <SafeAreaView>
      <ScrollView>
        {route?.params.route.params.property?.rooms.map((item, index) => (
          <Pressable
            style={{marginTop: 10, backgroundColor: 'white', padding: 10}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: '#007FFF',
                  fontSize: 17,
                  fontWeight: '500',
                }}>
                {item.name}
              </Text>
              <Entypo name="info" size={18} color="#007FFF" />
            </View>
            <Text style={{marginTop: 3}}>Phòng thương gia</Text>
            <Text style={{marginTop: 3, color: 'green', fontSize: 15}}>
              Miễn phí tất cả các dịch vụ
            </Text>
            <View
              style={{
                marginTop: 4,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 15,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: 'red',
                  textDecorationLine: 'line-through',
                }}>
                {route?.params.route.params.property.oldPrice *
                  route?.params.route.params.info.adults}{' '}
                VND
              </Text>
              <Text style={{fontSize: 18}}>
                {route?.params.route.params.property.newPrice *
                  route?.params.route.params.info.adults}{' '}
                VND
              </Text>
            </View>

            {select?.includes(item.name) ? (
              <Pressable
                onPress={() => setSlected(item.name)}
                style={{
                  borderColor: '#007FFF',
                  borderWidth: 2,
                  borderRadius: 10,
                  padding: 10,
                  marginTop: 15,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: '700',
                    fontSize: 16,
                    color: '#007FFF',
                  }}>
                  SELECTED
                  <FontAwesome name="check-circle" size={20} color="red" />
                </Text>
              </Pressable>
            ) : (
              <Pressable
                onPress={() => setSlected(item.name)}
                style={{
                  borderColor: '#007FFF',
                  borderWidth: 2,
                  borderRadius: 10,
                  padding: 10,
                  marginTop: 15,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: '700',
                    fontSize: 16,
                    color: '#007FFF',
                  }}>
                  SELECT
                </Text>
              </Pressable>
            )}
          </Pressable>
        ))}

        {select?.length > 0 ? (
          <Pressable
            style={{
              backgroundColor: '#007FFF',
              padding: 8,
              marginBottom: 30,
              borderRadius: 3,
              marginHorizontal: 15,
              marginTop: 15,
            }}
            onPress={() =>
              navigation.navigate('userScreen', {
                route: route,
              })
            }>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontWeight: 'bold',
                padding: 5,
              }}>
              Book
            </Text>
          </Pressable>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};

export default RoomScreen;
