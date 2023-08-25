// ModalComponent.js

import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

const FuelOrderFormModal = ({ isVisible, toggleModal }) => {
    const [quantity, setQuantity] = useState('');

    const handleSubmit = () => {
        console.log("Order quantity: ", quantity);
        quantity='';
        toggleModal();
    };

    return (
        <Modal 
            isVisible={isVisible}
            onBackdropPress={toggleModal}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            backdropTransitionInTiming={1000}
            backdropTransitionOutTiming={500}
            style={styles.modal}
        >
            <View style={styles.container}>
                <TextInput
                    placeholder="Order Quantity"
                    value={quantity}
                    onChangeText={setQuantity}
                    keyboardType="numeric"
                    style={styles.input}
                />
                <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
                    <Text>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleModal} style={styles.cancelButton}>
                    <Text>Cancel</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20, 
    },
    container: {
        backgroundColor: 'white',
        height: '50%',
        padding: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
    },
    submitButton: {
        backgroundColor: "#4CAF50",
        padding: 10,
        borderRadius: 5,
        marginVertical: 5
    },
    cancelButton: {
        backgroundColor: "#f44336",
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
    }
});

export default FuelOrderFormModal;
