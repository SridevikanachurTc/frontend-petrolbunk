import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ManagerScreenLayout from '../../layouts/ManagerScreenLayout';
import UserApi from '../../services/UserApi';

const AddStaff = ({ navigation }) => {

    const [employeeDetails, setEmployeeDetails] = useState({
        name: '',
        phoneNumber: '',
        salary: '',
        email: '',
        age: '',
        address: ''
    });

    const handleInputChange = (name, value) => {
        setEmployeeDetails(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  };

  const isValidAge = number => {
    const phoneRegex = /^\d{2}$/;
    return phoneRegex.test(number);
  };

  const handlePhoneNumberChange = (text) => {
      if (text.length <= 10) { // Ensure that the entered phone number is not more than 10 digits
          handleInputChange('phoneNumber', text);
      }
  };

  const areFieldsValid = () => {
    const {name, phoneNumber, salary, email, age, address} = employeeDetails;

    return name && phoneNumber && salary && email && age && address;
};



    const handleSubmit = async () => {
      try {

        if (!areFieldsValid()) {
          alert('Please enter data for all fields.');
          return;
      }

        if (!isValidEmail(employeeDetails.email)) {
          alert('Please enter a valid email address.');
          return;
      }

      if (!isValidAge(employeeDetails.age)) {
        alert('Please enter a valid age.');
        return;
      }

        await UserApi.createStaff(employeeDetails); 
        alert('Staff created successfully');
        setEmployeeDetails({
          name: '',
          phoneNumber: '',
          salary: '',
          email: '',
          age: '',
          address: ''
        });
      } catch (error) {
        console.error('Failed to create staff:', error);
        if (error.response && error.response.data && error.response.data.message) {
          console.log(`Error: ${error.response.data.message}`);
        } else {
          console.log('Failed to create staff.');
        }
      }
    };
    

    const handleCancel = () => {
        setEmployeeDetails({
            name: '',
            phoneNumber: '',
            salary: '',
            email: '',
            age: '',
            address: ''
        });
    };

    return (
        <ManagerScreenLayout navigation={navigation}>
            <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.headerHeading}>CREATE NEW STAFF</Text>
      </View>
      <View style={styles.container}>
        <View style={{height: 30}}></View>
            <TextInput
                    placeholder="Name"
                    value={employeeDetails.name}
                    onChangeText={(text) => handleInputChange('name', text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Phone Number"
                    value={employeeDetails.phoneNumber}
                    onChangeText={handlePhoneNumberChange}
                    keyboardType="phone-pad"
                    style={styles.input}
                />
                <TextInput
                    placeholder="Salary"
                    value={employeeDetails.salary}
                    onChangeText={(text) => handleInputChange('salary', text)}
                    keyboardType="numeric"
                    style={styles.input}
                />
                <TextInput
                    placeholder="Email"
                    value={employeeDetails.email}
                    onChangeText={(text) => handleInputChange('email', text)}
                    keyboardType="email-address"
                    style={styles.input}
                />
                <TextInput
                    placeholder="Age"
                    value={employeeDetails.age}
                    onChangeText={text => {
            if (text.length <= 2) handleInputChange('age', text);
          }}
                    keyboardType="numeric"
                    style={styles.input}
                />
                <TextInput
                    placeholder="Address"
                    value={employeeDetails.address}
                    onChangeText={(text) => handleInputChange('address', text)}
                    style={styles.input}
                />
                {/* <TextInput
                    placeholder="Role"
                    value={employeeDetails.role}
                    onChangeText={(text) => handleInputChange('role', text)}
                    style={styles.input}
                /> */}
               <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
        </View>
        </View>
        </ManagerScreenLayout>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#001F3F'
      },
      header: {
        // backgroundColor: '#001F3F',
        padding: 15,
      },
      headerHeading:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 3,
      },
      container: {
        backgroundColor: 'rgb(238, 242, 251)',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'
      },
    input: {
        elevation: 5,
        borderRadius: 5,
        padding: 10,
        width: 350,
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

export default AddStaff;
