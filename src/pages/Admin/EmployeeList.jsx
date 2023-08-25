// import React from 'react';
// import {Text} from 'react-native';
// import AdminScreenLayout from '../../layouts/AdminScreenLayout';

// const EmployeeList = ({navigation}) => {
//   return (
//     <AdminScreenLayout navigation={navigation}>
//         <Text style={{color: '#000'}}>Employee List</Text>
//       </AdminScreenLayout>
//   );
// };

// export default EmployeeList;
// EmployeeList.js
import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import AdminScreenLayout from '../../layouts/AdminScreenLayout';
import EmployeeCardsAdmin from '../../components/EmployeeCards';
import EmployeeDetailsModal from '../../components/EmployeeDetailsModal';
import AddEmployeeHeader from '../../components/AddEmployeeHeader';
// import { BlurView } from '@react-native-community/blur';

const employees = [
  {
    id: '1',
    name: 'John A',
    position: 'Manager',
    department: 'HR',
    email: 'john@example.com',
    phone: '123-456-7890',
  },
  {
    id: '2',
    name: 'John B',
    position: 'Manager',
    department: 'HR',
    email: 'john@example.com',
    phone: '123-456-7890',
  },
  {
    id: '3',
    name: 'John C',
    position: 'Manager',
    department: 'HR',
    email: 'john@example.com',
    phone: '123-456-7890',
  },
  {
    id: '4',
    name: 'John D',
    position: 'Manager',
    department: 'HR',
    email: 'john@example.com',
    phone: '123-456-7890',
  },
  {
    id: '5',
    name: 'John E',
    position: 'Manager',
    department: 'HR',
    email: 'john@example.com',
    phone: '123-456-7890',
  },
  {
    id: '6',
    name: 'John F',
    position: 'Manager',
    department: 'HR',
    email: 'john@example.com',
    phone: '123-456-7890',
  },
  {
    id: '7',
    name: 'John G',
    position: 'Manager',
    department: 'HR',
    email: 'john@example.com',
    phone: '123-456-7890',
  },
  {
    id: '8',
    name: 'John H',
    position: 'Manager',
    department: 'HR',
    email: 'john@example.com',
    phone: '123-456-7890',
  },
  {
    id: '9',
    name: 'John I',
    position: 'Manager',
    department: 'HR',
    email: 'john@example.com',
    phone: '123-456-7890',
  },
  {
    id: '10',
    name: 'John J',
    position: 'Manager',
    department: 'HR',
    email: 'john@example.com',
    phone: '123-456-7890',
  },
  {
    id: '11',
    name: 'John K',
    position: 'Manager',
    department: 'HR',
    email: 'john@example.com',
    phone: '123-456-7890',
  },
  {
    id: '12',
    name: 'John L',
    position: 'Manager',
    department: 'HR',
    email: 'john@example.com',
    phone: '123-456-7890',
  },
  {
    id: '13',
    name: 'John M',
    position: 'Manager',
    department: 'HR',
    email: 'john@example.com',
    phone: '123-456-7890',
  },
  {
    id: '14',
    name: 'John N',
    position: 'Manager',
    department: 'HR',
    email: 'john@example.com',
    phone: '123-456-7890',
  },
  {
    id: '15',
    name: 'John O',
    position: 'Manager',
    department: 'HR',
    email: 'john@example.com',
    phone: '123-456-7890',
  },
  {
    id: '16',
    name: 'John P',
    position: 'Manager',
    department: 'HR',
    email: 'john@example.com',
    phone: '123-456-7890',
  },
  {
    id: '17',
    name: 'John Q',
    position: 'Manager',
    department: 'HR',
    email: 'john@example.com',
    phone: '123-456-7890',
  },
  {
    id: '18',
    name: 'John R',
    position: 'Manager',
    department: 'HR',
    email: 'john@example.com',
    phone: '123-456-7890',
  },
  {
    id: '19',
    name: 'John S',
    position: 'Manager',
    department: 'HR',
    email: 'john@example.com',
    phone: '123-456-7890',
  },
  {
    id: '20',
    name: 'John T',
    position: 'Manager',
    department: 'HR',
    email: 'john@example.com',
    phone: '123-456-7890',
  },
  {
    id: '21',
    name: 'John U',
    position: 'Manager',
    department: 'HR',
    email: 'john@example.com',
    phone: '123-456-7890',
  },
  {
    id: '22',
    name: 'John V',
    position: 'Manager',
    department: 'HR',
    email: 'john@example.com',
    phone: '123-456-7890',
  },
  {
    id: '23',
    name: 'John W',
    position: 'Manager',
    department: 'HR',
    email: 'john@example.com',
    phone: '123-456-7890',
  },
  {
    id: '24',
    name: 'John X',
    position: 'Manager',
    department: 'HR',
    email: 'john@example.com',
    phone: '123-456-7890',
  },
  {
    id: '25',
    name: 'John Y',
    position: 'Manager',
    department: 'HR',
    email: 'john@example.com',
    phone: '123-456-7890',
  },
  {
    id: '26',
    name: 'John Z',
    position: 'Manager',
    department: 'HR',
    email: 'john@example.com',
    phone: '123-456-7890',
  },
 
  // ... Add more employees as needed
];

const EmployeeList = ({ navigation }) => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleEmployeePress = (employee) => {
    setSelectedEmployee(employee);
  };

  const handleCloseModal = () => {
    setSelectedEmployee(null);
  };

  const renderContentModelVisible = () => (
    <View style={styles.containerVisible}>
      <AddEmployeeHeader />
      <FlatList
        data={employees}
        renderItem={({ item }) => (
          <EmployeeCardsAdmin employee={item} onPress={handleEmployeePress} />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
      <EmployeeDetailsModal
        isVisible={!!selectedEmployee}
        employee={selectedEmployee}
        onClose={handleCloseModal}
      />
    </View>
  );


  const renderContent = () => (
    <View style={styles.container}>
      <AddEmployeeHeader />
      <FlatList
        data={employees}
        renderItem={({ item }) => (
          <EmployeeCardsAdmin employee={item} onPress={handleEmployeePress} />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
      <EmployeeDetailsModal
        isVisible={!!selectedEmployee}
        employee={selectedEmployee}
        onClose={handleCloseModal}
      />
    </View>
  );

  return (
    <AdminScreenLayout navigation={navigation}>
      {selectedEmployee ? (
          renderContentModelVisible()
      ) : (
        renderContent()
      )}
    </AdminScreenLayout>
  );
};

const styles = StyleSheet.create({
  containerVisible:{
    flex: 1,
    padding: 16,
    // background: '',
    opacity:0.2,
    
  },
  container: {
    flex: 1,
    padding: 16,
  },
});

export default EmployeeList;
