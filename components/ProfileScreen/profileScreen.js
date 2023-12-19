import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import Modal from "react-native-modal";





const ProfileScreen = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const closeModal = () => {
        setModalVisible(false);
    };
    return (
        <View style={{ flex: 1 }}>
            <Button title="Show modal" onPress={toggleModal} />

            <Modal isVisible={isModalVisible} swipeDirection={['down']} onBackdropPress={closeModal}
                onSwipeComplete={closeModal}
                animationIn="slideInUp"
                animationOut="slideOutDown"
            >
                <View >
                    <Text>Hello!</Text>

                    <Button title="Hide modal" onPress={toggleModal} />
                </View>
            </Modal>
        </View>
    )
}

export default ProfileScreen