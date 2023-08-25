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
                <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
                    <Text  style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleModal} style={styles.cancelButton}>
                    <Text  style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
                </View>
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
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    submitButton: {
        backgroundColor: "#4CAF50",
        padding: 10,
        borderRadius: 5,
        flex: 0.45,
        alignItems: 'center'
    },
    cancelButton: {
        backgroundColor: "#f44336",
        padding: 10,
        borderRadius: 5,
        flex: 0.45,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 16
    }
});

export default FuelOrderFormModal;
