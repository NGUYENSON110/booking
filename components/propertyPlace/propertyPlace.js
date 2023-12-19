import {View, Text, Pressable, Image, Dimensions} from 'react-native';
import React from 'react';

const PropertyPlace = (property) => {
  // console.log('123', property);
  const {width, height} = Dimensions.get('window');
  return (
    <View >
      <Pressable
        style={{margin: 15, flexDirection: 'row', backgroundColor: 'white'}}>
        <View>
          <Image
            style={{height: height / 4, width: width - 200}}
            source={{uri: property.image}}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default PropertyPlace;
