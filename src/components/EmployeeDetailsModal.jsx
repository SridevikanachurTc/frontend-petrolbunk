import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';

const EmployeeDetailsModal = ({ isVisible, employee, onClose }) => {
  if (!employee) return null;

  return (
    <Modal 
      isVisible={isVisible}
      onBackdropPress={onClose}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      backdropTransitionInTiming={1000}
      backdropTransitionOutTiming={500}
      style={styles.modal}
    >
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Icon name="close" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.modalTitle}>Employee Details</Text>
        <Text style={styles.text}>Name: {employee.name}</Text>
        <Text style={styles.text}>Position: {employee.position}</Text>
        <Text style={styles.text}>Department: {employee.department}</Text>
        <Text style={styles.text}>Email: {employee.email}</Text>
        <Text style={styles.text}>Phone: {employee.phone}</Text>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',
    height: '50%',
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30, 
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000',
  },
  text: {
    color:'#000',
  },
  closeButton: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
},
});

export default EmployeeDetailsModal;
