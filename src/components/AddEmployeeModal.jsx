import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

const AddEmployeeModal = ({ isVisible, closeModal, onSubmit, selectedBranch }) => {
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
      onSubmit(employeeDetails, selectedBranch.id);
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
            isVisible={isVisible}
            onBackdropPress={handleCancel}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            backdropTransitionInTiming={1000}
            backdropTransitionOutTiming={500}
            style={styles.modal}
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
    modalContainer: {
        backgroundColor: 'white',
        height: '80%',
        padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30, 
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

export default AddEmployeeModal;
