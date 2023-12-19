import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Pressable,
  TextInput,
  TouchableOpacity,
  Button,
  StyleSheet,
  Alert,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../header/header';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DatePicker from 'react-native-date-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import {Dimensions} from 'react-native';
import {useRoute} from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  // console.log('route', route);
  const date = new Date();
  const [hienthingaydi, setHienThingaydi] = useState('');
  const [hienthingayve, setHienThiNgayVe] = useState('');
  const [openGo, setOpenGo] = useState(false);
  const [openBack, setOpenBack] = useState(false);
  const [rooms, setRooms] = useState(3);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);

  const checkSelectNgayVe = (dateSelect, dateNgayDi) => {
    console.log('date1', dateSelect);
    console.log('date2', dateNgayDi);
    if (dateSelect.toLocaleDateString('vi-VN') <= dateNgayDi) {
      setOpenBack(false);
      setHienThiNgayVe('');
      Alert.alert('Vui lòng chọn lại ngày tháng đi');
    } else if (dateNgayDi == '') {
      setOpenBack(false);
      setHienThiNgayVe('');
      Alert.alert(
        'Vui lòng chọn lại ngày tháng đi trước rồi chọn ngày tháng về',
      );
    } else {
      setHienThiNgayVe(dateSelect.toLocaleDateString('vi-VN'));
      setOpenBack(false);
    }
  };

  const checkSelectNgayDi = dateSelect => {
    // console.log("date",dateSelect)
    let dateNow = new Date();
    // console.log("datenow",dateNow)
    let dateNow1 = new Date(dateSelect);
    // console.log("dateNow1", dateNow1)
    if (dateNow1 < dateNow) {
      setOpenGo(false);
      setHienThingaydi('');
      Alert.alert('Vui lòng chọn lại ngày tháng đi');
    } else {
      setOpenGo(false);
      setHienThingaydi(dateSelect.toLocaleDateString('vi-VN'));
    }
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const setRoomsDown = () => {
    console.log('rooms', rooms);
    setRooms(Math.max(1, rooms - 1));
  };

  const setRoomsUp = () => {
    setRooms(Math.min(10, rooms + 1));
  };

  const setAdultsDown = () => {
    setAdults(Math.max(1, adults - 1));
  };

  const setAdultsUp = () => {
    setAdults(Math.min(10, adults + 1));
  };

  const setChildrenDown = () => {
    setChildren(Math.max(1, children - 1));
  };

  const setChildrenUp = () => {
    setChildren(Math.min(10, children + 1));
  };

  const searchPlace = (place) => {
    if (!place || !hienthingaydi || !hienthingayve) {
      Alert.alert(
        'Thông Báo',
        'Vui lòng chọn địa điểm du lịch và ngày tháng đi và về',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        // {cancelable: false}, // Set cancelable to true if you want to allow canceling by tapping outside the alert
      );
    }

    if (place && hienthingaydi && hienthingayve) {
      navigation.navigate('Place', {
        rooms: rooms,
        adults: adults,
        children: children,
        hienthingaydi: hienthingaydi,
        hienthingayve: hienthingayve,
        places: place,
      });
    }
  };


  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
  }, []);
  // console.log("datePicker", hienthiDate)
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Header />

        <ScrollView>
          <View style={styles.container}>
            {/* Destination */}
            <Pressable
              style={{flexDirection: 'row', borderBottomColor: 'red'}}
              onPress={() => navigation.navigate('Sreach')}>
              <Feather
                name="search"
                size={24}
                color="red"
                style={{marginTop: 12, marginLeft: 10}}
              />
              <Text style={{marginLeft: 10, marginTop: 12}}>
                {route?.params ? route.params.input : 'Chọn Địa Điểm Nghỉ Ngơi'}
              </Text>
            </Pressable>
          </View>

          {/* Ngày tháng đi */}
          <View style={styles.container}>
            {/* Selected Dates */}
            <TouchableOpacity
              style={{flexDirection: 'row', borderBottomColor: 'red'}}
              onPress={() => setOpenGo(true)}>
              <MaterialIcons
                name="date-range"
                size={24}
                color="red"
                style={{marginTop: 12, marginLeft: 10}}
              />
              <Text style={{marginLeft: 14, marginTop: 10}}>
                Ngày tháng đi : {hienthingaydi}
              </Text>
              <DatePicker
                modal
                open={openGo}
                date={date}
                textColor="#f0f"
                onConfirm={dateSelect => {
                  checkSelectNgayDi(dateSelect);
                  // setOpenGo(false);
                  // setHienThingaydi(date.toLocaleDateString('vi-VN'));
                }}
                onCancel={() => {
                  setOpenGo(false);
                  setHienThingaydi('');
                }}
              />
            </TouchableOpacity>
          </View>

          {/* Ngày tháng về */}
          <View style={styles.container}>
            {/* Selected Dates */}
            <TouchableOpacity
              style={{flexDirection: 'row', borderBottomColor: 'red'}}
              onPress={() => setOpenBack(true)}>
              <MaterialIcons
                name="date-range"
                size={24}
                color="red"
                style={{marginTop: 12, marginLeft: 10}}
              />
              <Text style={{marginLeft: 14, marginTop: 10}}>
                Ngày tháng về : {hienthingayve}
              </Text>
              <DatePicker
                modal
                open={openBack}
                date={date}
                textColor="#f0f"
                onConfirm={date => {
                  checkSelectNgayVe(date, hienthingaydi);
                }}
                onCancel={() => {
                  setOpenBack(false);
                  setHienThiNgayVe('');
                }}
              />
            </TouchableOpacity>
          </View>

          {/* <View style={{ marginTop: 10, marginLeft: 20, marginRight: 20, borderColor: "#FFc72C", borderWidth: 3, borderRadius: 6, height: 50 }}>
                        <Pressable style={{ flexDirection: 'row', borderBottomColor: "red" }}>
                            <Feather name="search" size={24} color="red" style={{ marginTop: 12, marginLeft: 10, }} />
                            <TextInput placeholder='Enter your Destination' style={{ marginLeft: 10, }} />
                        </Pressable>
                    </View> */}

          {/* Rooms and Guests */}
          <View style={styles.container}>
            <Pressable
              style={{flexDirection: 'row', borderBottomColor: 'red'}}
              onPress={toggleModal}>
              <Ionicons
                name="person-outline"
                size={24}
                color="red"
                style={{marginTop: 12, marginLeft: 10}}
              />
              <Text
                // placeholder="1 room * 2 người lớn * 0 trẻ em"
                style={{marginLeft: 10, marginTop: 10}}>
                1 room * 2 người lớn * 0 trẻ em
              </Text>
            </Pressable>
          </View>

          {/* Search Button */}
          <View style={styles.container}>
            <Pressable
              style={{
                flexDirection: 'row',
                borderBottomColor: 'red',
                backgroundColor: '#2a52be',
                height: 50,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={()=>searchPlace(route?.params?.input)}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 15,
                  fontWeight: '500',
                  color: 'white',
                }}>
                Search
              </Text>
            </Pressable>
          </View>
          {/* <Button title="Show modal" onPress={toggleModal} /> */}
          <Modal
            isVisible={isModalVisible}
            swipeThreshold={200}
            onBackdropPress={closeModal}
            onSwipeComplete={closeModal}
            swipeDirection={['up', 'down']}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            backdropOpacity={0.5}
            useNativeDriver={true}
            style={{justifyContent: 'flex-end', margin: 0}}>
            <View
              style={{backgroundColor: '#ffffff', height: windowHeight - 500}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 5,
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>
                  Select rooms and guests
                </Text>
              </View>

              {/* Select rooms */}
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginVertical: 15,
                  marginLeft: 10,
                  marginRight: 10,
                }}>
                <Text style={{fontWeight: 'bold'}}>Rooms</Text>
                <Pressable style={styles.modalBtnContainer}>
                  <Pressable
                    style={styles.modalBtndown}
                    onPress={() => setRoomsDown()}>
                    <Text style={styles.modalBtnText}>-</Text>
                  </Pressable>

                  <Pressable>
                    <Text>{rooms}</Text>
                  </Pressable>

                  <Pressable
                    style={styles.modalBtnup}
                    onPress={() => setRoomsUp()}>
                    <Text style={styles.modalBtnText}>+</Text>
                  </Pressable>
                </Pressable>
              </View>

              {/* Select Adults */}
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginVertical: 15,
                  marginLeft: 10,
                  marginRight: 10,
                }}>
                <Text style={{fontWeight: 'bold'}}>Adults</Text>
                <Pressable style={styles.modalBtnContainer}>
                  <Pressable
                    style={styles.modalBtndown}
                    onPress={() => setAdultsDown()}>
                    <Text style={styles.modalBtnText}>-</Text>
                  </Pressable>

                  <Pressable>
                    <Text>{adults}</Text>
                  </Pressable>

                  <Pressable
                    style={styles.modalBtnup}
                    onPress={() => setAdultsUp()}>
                    <Text style={styles.modalBtnText}>+</Text>
                  </Pressable>
                </Pressable>
              </View>

              {/* Select Children */}
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginVertical: 15,
                  marginLeft: 10,
                  marginRight: 10,
                }}>
                <Text style={{fontWeight: 'bold'}}>Children</Text>
                <Pressable style={styles.modalBtnContainer}>
                  <Pressable
                    style={styles.modalBtndown}
                    onPress={() => setChildrenDown()}>
                    <Text style={styles.modalBtnText}>-</Text>
                  </Pressable>

                  <Pressable>
                    <Text>{children}</Text>
                  </Pressable>

                  <Pressable
                    style={styles.modalBtnup}
                    onPress={() => setChildrenUp()}>
                    <Text style={styles.modalBtnText}>+</Text>
                  </Pressable>
                </Pressable>
              </View>
              <Button title="Ok" onPress={toggleModal} />
            </View>
          </Modal>

          <Text
            style={{
              marginHorizontal: 20,
              fontSize: 17,
              fontWeight: '500',
              marginVertical: 10,
            }}>
            Travel More spend less
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Pressable
              style={{
                width: 200,
                height: 150,
                marginTop: 10,
                backgroundColor: '#003580',
                borderRadius: 10,
                padding: 20,
                marginLeft: 20,
                marginRight: 5,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  color: 'white',
                  fontWeight: 'bold',
                  marginVertical: 7,
                }}>
                Genius
              </Text>
              <Text style={{fontSize: 15, color: 'white', fontWeight: '500'}}>
                You are ate Genius level one in our loyalty program
              </Text>
            </Pressable>

            <Pressable
              style={{
                width: 200,
                height: 150,
                marginTop: 10,
                backgroundColor: '#003580',
                borderRadius: 10,
                padding: 20,
                marginHorizontal: 5,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  color: 'white',
                  fontWeight: 'bold',
                  marginVertical: 7,
                }}>
                Genius
              </Text>
              <Text style={{fontSize: 15, color: 'white', fontWeight: '500'}}>
                You are ate Genius level one in our loyalty program
              </Text>
            </Pressable>

            <Pressable
              style={{
                width: 200,
                height: 150,
                marginTop: 10,
                backgroundColor: '#003580',
                borderRadius: 10,
                padding: 20,
                marginHorizontal: 5,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  color: 'white',
                  fontWeight: 'bold',
                  marginVertical: 7,
                }}>
                Genius
              </Text>
              <Text style={{fontSize: 15, color: 'white', fontWeight: '500'}}>
                You are ate Genius level one in our loyalty program
              </Text>
            </Pressable>

            <Pressable
              style={{
                width: 200,
                height: 150,
                marginTop: 10,
                backgroundColor: '#003580',
                borderRadius: 10,
                padding: 20,
                marginLeft: 5,
                marginRight: 20,
              }}>
              <Text
                style={{
                  fontSize: 15,
                  color: 'white',
                  fontWeight: 'bold',
                  marginVertical: 7,
                }}>
                Genius
              </Text>
              <Text style={{fontSize: 15, color: 'white', fontWeight: '500'}}>
                You are ate Genius level one in our loyalty program
              </Text>
            </Pressable>
          </ScrollView>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    borderColor: '#FFc72C',
    borderWidth: 3,
    borderRadius: 6,
    height: 50,
  },
  modalBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  modalBtnup: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderColor: '#BEBEBE',
    backgroundColor: '#E0E0E0',
  },
  modalBtnText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    paddingHorizontal: 5,
  },
  modalBtndown: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderColor: '#BEBEBE',
    backgroundColor: '#E0E0E0',
  },
});

export default HomeScreen;
