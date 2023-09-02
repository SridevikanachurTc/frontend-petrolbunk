// AddBranchModal.js

import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import BranchApi from '../../services/BranchApi';

const AddBranchForm = ({ isVisible, onDismiss, onSubmit }) => {
    const [branchName, setBranchName] = useState('');
    const [location, setLocation] = useState('');
    const [fuelCapacity, setFuelCapacity] = useState('');
    const [fuelLevel, setFuelLevel] = useState('');

    
    const handleCancel = () => {
        setBranchName('');
        setLocation('');
        setFuelCapacity('');
        setFuelLevel('');
        onDismiss();
    };

    const handleFormSubmission = async () => {
        if (!isNumber(fuelCapacity) || !isNumber(fuelLevel)) {
            alert('Fuel capacity and fuel level should only be numbers.');
            return;
        }
        
        try {
            const newBranch = await BranchApi.createBranch({
                name: branchName,
                location: location,
                fuelCapacity: fuelCapacity,
                fuelLevel: fuelLevel
            });
            onSubmit(newBranch);
            handleCancel();
        } catch (error) {
            console.error("Error adding new branch:", error);
        }
    };
    

    const handleSubmit = () => {
        handleFormSubmission();
    };

    const isNumber = (value) => {
        return /^[0-9]*(\.[0-9]+)?$/.test(value);
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
            <Text style={styles.text}>Add Branch Details</Text>
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
                <TextInput
                    placeholder="Fuel Capacity"
                    value={fuelCapacity}
                    onChangeText={setFuelCapacity}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Fuel Level"
                    value={fuelLevel}
                    onChangeText={setFuelLevel}
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
        backgroundColor: 'rgb(238, 242, 251)',
        height: '60%',
        padding: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
      },
      text: {
        color: '#001F3F',
        textAlign: 'center',
        padding: 5,
        paddingBottom: 20,
        fontWeight: 'bold',
        fontSize: 20,
      },
      input: {
        elevation: 5,
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        backgroundColor: '#fff',
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
      },
      submitButton: {
        backgroundColor: '#001F3F',
        padding: 10,
        flex: 0.45,
        alignItems: 'center',
        marginRight: 1,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
      },
      cancelButton: {
        backgroundColor: '#001F3F',
        padding: 10,
        flex: 0.45,
        alignItems: 'center',
        marginLeft: 1,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
      },
    
});

export default AddBranchForm;
