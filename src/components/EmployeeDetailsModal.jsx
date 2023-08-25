import React from 'react';
import { View, Text, Modal, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const EmployeeDetailsModal = ({ isVisible, employee, onClose }) => {
  if (!employee) return null;

  const renderEmployeeDetail = ({ item }) => (
    <View>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                <Icon name="close" size={30} color="#fff" />
            </TouchableOpacity>
    <View>
      <Text style={styles.modalTitle}>Employee Details</Text>
      <Text style={styles.text}>Name: {item.name}</Text>
      <Text style={styles.text}>Position: {item.position}</Text>
      <Text style={styles.text}>Department: {item.department}</Text>
      <Text style={styles.text}>Email: {item.email}</Text>
      <Text style={styles.text}>Phone: {item.phone}</Text>
    </View>
    </View>
  );

  const employeeDetailsArray = new Array(10).fill(employee);

  return (
    <Modal animationType="slide" transparent={true} visible={isVisible} >
      <View style={styles.modalContainer}>
        <FlatList
          data={employeeDetailsArray}
          renderItem={renderEmployeeDetail}
          keyExtractor={(item, index) => index.toString()}
          style={styles.modalContent}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    // flex: 1,
    width: '80%',
    height: '75%',
    position: 'absolute',
    top: '10%',
    left: '10%',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
  modalContent: {
    borderRadius: 8,
    width: '100%',
    padding: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  text: {
    color:'#fff'
  },
  closeButton: {
    position: 'relative',
    left: '90%',
  }
});

export default EmployeeDetailsModal;

{/* <Button title="Close" onPress={onClose} /> */}