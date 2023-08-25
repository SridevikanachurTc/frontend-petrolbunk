import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';

const AddBranchForm = ({ onSubmit }) => {

    const [address, setAddress] = useState('');

    const handleCancel = () => {
        setAddress('');
    };

    const handleSubmit = () => {
        onSubmit(address);
        setAddress('');
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Address"
                value={address}
                onChangeText={setAddress}
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
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20
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

export default AddBranchForm;
