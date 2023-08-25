import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const EmployeeCards = ({ employee, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(employee)}>
      <Text style={styles.cardText}>{employee.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
    padding: 16,
    marginLeft: 1,
    // borderBottomColor: 'gray',
    // borderBottomWidth: 1,
    borderRadius: 8,
    backgroundColor: '#fff',
    width: '99%',
    elevation: 4,
  },
  cardText: {
    fontSize: 16,
    color: '#000'
  },
});

export default EmployeeCards;
