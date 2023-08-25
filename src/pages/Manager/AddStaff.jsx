import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ManagerScreenLayout from '../../layouts/ManagerScreenLayout';

const AddStaff = ({ navigation }) => {

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
        console.log('Employee Details:', employeeDetails); 
        setEmployeeDetails({
            name: '',
            phoneNumber: '',
            salary: '',
            email: '',
            age: '',
            address: '',
            position: ''
        });
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
    };

    return (
        <ManagerScreenLayout navigation={navigation}>
            <View style={styles.container}>
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
                <View style={styles.row}>
                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
                    <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
                </View>
            </View>
        </ManagerScreenLayout>
    );
}

const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
        padding: 20
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20
    },
    submitButton: {
        backgroundColor: "#4CAF50",
        padding: 10,
        borderRadius: 5,
        marginTop: 10
    },
    cancelButton: {
        backgroundColor: "#f44336",
        padding: 10,
        borderRadius: 5,
        marginTop: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    }
});

export default AddStaff;
