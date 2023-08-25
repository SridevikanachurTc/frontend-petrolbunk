import React, { useState } from 'react';
import { View, Modal, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';

const AddEmployeeModal = ({ isVisible, closeModal, onSubmit }) => {

    const [employeeDetails, setEmployeeDetails] = useState({
        name: '',
        phoneNumber: '',
        salary: '',
        email: '',
        age: '',
        address: '',
        position: ''
    });

    const handleInputChange = (name, value) => {
        setEmployeeDetails(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        onSubmit(employeeDetails);
        setEmployeeDetails({
            name: '',
            phoneNumber: '',
            salary: '',
            email: '',
            age: '',
            address: '',
            position: ''
        });
        closeModal();
    };

    const handleCancel = () => {
        setEmployeeDetails({
            name: '',
            phoneNumber: '',
            salary: '',
            email: '',
            age: '',
            address: '',
            position: ''
        });
        closeModal();
    };

    return (
        <Modal 
            animationType="slide"
            visible={isVisible}
            presentationStyle="pageSheet"
        >
            <View style={styles.modalContainer}>
                <TextInput
                    placeholder="Name"
                    value={employeeDetails.name}
                    onChangeText={(text) => handleInputChange('name', text)}
                />
                <TextInput
                    placeholder="Phone Number"
                    value={employeeDetails.phoneNumber}
                    onChangeText={(text) => handleInputChange('phoneNumber', text)}
                    keyboardType="phone-pad"
                />
                <TextInput
                    placeholder="Salary"
                    value={employeeDetails.salary}
                    onChangeText={(text) => handleInputChange('salary', text)}
                    keyboardType="numeric"
                />
                <TextInput
                    placeholder="Email"
                    value={employeeDetails.email}
                    onChangeText={(text) => handleInputChange('email', text)}
                    keyboardType="email-address"
                />
                <TextInput
                    placeholder="Age"
                    value={employeeDetails.age}
                    onChangeText={(text) => handleInputChange('age', text)}
                    keyboardType="numeric"
                />
                <TextInput
                    placeholder="Address"
                    value={employeeDetails.address}
                    onChangeText={(text) => handleInputChange('address', text)}
                />
                <TextInput
                    placeholder="Position"
                    value={employeeDetails.position}
                    onChangeText={(text) => handleInputChange('position', text)}
                />
                
                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                    <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitButton: {
        backgroundColor: "#4CAF50",
        padding: 10,
        borderRadius: 5,
        marginTop: 10
    },
    submitButtonText: {
        color: 'white',
        fontSize: 16
    },
    cancelButton: {
        backgroundColor: "#f44336",
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        width: 300
    },
    cancelButtonText: {
        color: 'white',
        fontSize: 16
    }
});

export default AddEmployeeModal;
