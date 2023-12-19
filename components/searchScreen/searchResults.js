import {View, Text, FlatList, Pressable, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const searchResults = ({data, input, setInput}) => {


  const navigation = useNavigation();
  return (
    <View style={{padding: 10}}>
      <FlatList
        data={data}
        renderItem={({item}) => {
          if (item.place.toLowerCase().includes(input.toLowerCase())) {
            if (input === '') {
              return (
                <Pressable
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginVertical: 10,
                  }}
                  onPress={() => {
                    setInput(item.place);
                    navigation.navigate('Home', {
                      input: item.place,
                    });
                  }}>
                  <View>
                    <Image
                      style={{width: 70, height: 70, borderRadius: 5}}
                      source={{uri: item.placeImage}}
                    />
                  </View>
                  <View style={{marginLeft: 10}}>
                    <Text style={{fontSize: 15, fontWeight: '500'}}>
                      {item.place}
                    </Text>
                    <Text style={{marginVertical: 4}}>
                      {item.shortDescription}
                    </Text>
                    <Text style={{color: 'gray', fontSize: 15}}>
                      {item.properties.length}
                    </Text>
                  </View>
                </Pressable>
              );
            }
            return (
              <Pressable
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: 10,
                }}
                onPress={() => {
                  setInput(item.place);
                  navigation.navigate('Home', {
                    input: item.place,
                  });
                }}>
                <View>
                  <Image
                    style={{width: 70, height: 70, borderRadius: 5}}
                    source={{uri: item.placeImage}}
                  />
                </View>
                <View style={{marginLeft: 10}}>
                  <Text style={{fontSize: 15, fontWeight: '500'}}>
                    {item.place}
                  </Text>
                  <Text style={{marginVertical: 4}}>
                    {item.shortDescription}
                  </Text>
                  <Text style={{color: 'gray', fontSize: 15}}>
                    {item.properties.length}
                  </Text>
                </View>
              </Pressable>
            );
          }
        }}
      />
    </View>
  );
};

export default searchResults;
