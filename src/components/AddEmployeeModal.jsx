import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';

const AddEmployeeModal = ({
  isVisible,
  closeModal,
  cancleClose,
  onSubmit,
  selectedBranch,
}) => {
  const [employeeDetails, setEmployeeDetails] = useState({
    name: '',
    salary: '',
    email: '',
    age: '',
    address: '',
    phoneNumber: '',
  });

  const handleInputChange = (name, value) => {
    setEmployeeDetails(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (!isValidEmail(employeeDetails.email)) {
      alert('Please enter a valid email address.');
      return;
    }
    if (!isValidPhoneNumber(employeeDetails.phoneNumber)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }

    if (!isValidAge(employeeDetails.age)) {
      alert('Please enter a valid age.');
      return;
    }

    if (selectedBranch) {
      onSubmit(employeeDetails, selectedBranch.id);
    }
    setEmployeeDetails({
      name: '',
      salary: '',
      email: '',
      age: '',
      address: '',
      phoneNumber: '',
    });
    closeModal();
  };

  const handleCancel = () => {
    setEmployeeDetails({
      name: '',
      salary: '',
      email: '',
      age: '',
      address: '',
      phoneNumber: '',
    });
    cancleClose();
  };

  const isValidEmail = email => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = number => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(number);
  };

  const isValidAge = number => {
    const phoneRegex = /^\d{2}$/;
    return phoneRegex.test(number);
  };

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={handleCancel}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      backdropTransitionInTiming={1000}
      backdropTransitionOutTiming={500}
      style={styles.modal}>
      <View style={styles.container}>
        <Text style={styles.text}>Add Manager Details</Text>
        <TextInput
          placeholder="Name"
          value={employeeDetails.name}
          onChangeText={text => handleInputChange('name', text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Phone Number"
          value={employeeDetails.phoneNumber}
          onChangeText={text => {
            if (text.length <= 10) handleInputChange('phoneNumber', text);
          }}
          keyboardType="phone-pad"
          maxLength={10}
          style={styles.input}
        />

        <TextInput
          placeholder="Salary"
          value={employeeDetails.salary}
          onChangeText={text => handleInputChange('salary', text)}
          keyboardType="numeric"
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          value={employeeDetails.email}
          onChangeText={text => handleInputChange('email', text)}
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
          onChangeText={text => handleInputChange('address', text)}
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
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    backgroundColor: 'rgb(238, 242, 251)',
    height: '80%',
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

export default AddEmployeeModal;
