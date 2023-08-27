// AddBranchModal.js

import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

const AddBranchForm = ({ isVisible, onDismiss, onSubmit }) => {
    const [branchName, setBranchName] = useState('');
    const [location, setLocation] = useState('');
    
    const handleCancel = () => {
        setBranchName('');
        setLocation('');
        onDismiss();
    };

    const handleSubmit = () => {
        onSubmit({ branchName, location });
        handleCancel();
    };

    return (
        <Modal 
            isVisible={isVisible}
            onBackdropPress={handleCancel}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            backdropTransitionInTiming={1000}
            backdropTransitionOutTiming={500}
            style={styles.modal}
        >
            <View style={styles.container}>
                <TextInput
                    placeholder="Branch Name"
                    value={branchName}
                    onChangeText={setBranchName}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Branch Location"
                    value={location}
                    onChangeText={setLocation}
                    style={styles.input}
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
                        <Text style={styles.buttonText}>Cancel</Text>
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
    },
    container: {
        backgroundColor: 'white',
        height: '50%',
        padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30, 
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
        justifyContent: 'center'
    },
    submitButton: {
        backgroundColor: "#4CAF50",
        padding: 10,
        flex: 0.45,
        alignItems: 'center',
        marginRight: 1,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15
    },
    cancelButton: {
        backgroundColor: "#f44336", 
        padding: 10,
        flex: 0.45,
        alignItems: 'center',
        marginLeft: 1, 
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15       
    },
    buttonText: {
        color: 'white',
        fontSize: 16
    }
});

export default AddBranchForm;
