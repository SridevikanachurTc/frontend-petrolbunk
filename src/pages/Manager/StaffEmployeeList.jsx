// import React, {useEffect, useState} from 'react';
// import {View, FlatList, StyleSheet, Text} from 'react-native';
// import EmployeeCards from '../../components/EmployeeCards';
// import EmployeeDetailsModal from '../../components/EmployeeDetailsModal';
// import ManagerScreenLayout from '../../layouts/ManagerScreenLayout';
// import UserApi from '../../services/UserApi';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// // const employees = [
// //   {
// //     id: '1',
// //     name: 'John A',
// //     position: 'Manager',
// //     department: 'HR',
// //     email: 'john@example.com',
// //     phoneNumber: '123-456-7890',
// //   },
// //   {
// //     id: '2',
// //     name: 'John B',
// //     position: 'Manager',
// //     department: 'HR',
// //     email: 'john@example.com',
// //     phoneNumber: '123-456-7890',
// //   },
// //   {
// //     id: '3',
// //     name: 'John C',
// //     position: 'Staff',
// //     department: 'HR',
// //     email: 'john@example.com',
// //     phoneNumber: '123-456-7890',
// //   },
// //   {
// //     id: '4',
// //     name: 'John D',
// //     position: 'Manager',
// //     department: 'HR',
// //     email: 'john@example.com',
// //     phoneNumber: '123-456-7890',
// //   },
// //   {
// //     id: '5',
// //     name: 'John E',
// //     position: 'Manager',
// //     department: 'HR',
// //     email: 'john@example.com',
// //     phoneNumber: '123-456-7890',
// //   },
// //   {
// //     id: '6',
// //     name: 'John F',
// //     position: 'Manager',
// //     department: 'HR',
// //     email: 'john@example.com',
// //     phoneNumber: '123-456-7890',
// //   },
// //   {
// //     id: '7',
// //     name: 'John G',
// //     position: 'Manager',
// //     department: 'HR',
// //     email: 'john@example.com',
// //     phoneNumber: '123-456-7890',
// //   },
// //   {
// //     id: '8',
// //     name: 'John H',
// //     position: 'Manager',
// //     department: 'HR',
// //     email: 'john@example.com',
// //     phoneNumber: '123-456-7890',
// //   },
// //   {
// //     id: '9',
// //     name: 'John I',
// //     position: 'Manager',
// //     department: 'HR',
// //     email: 'john@example.com',
// //     phoneNumber: '123-456-7890',
// //   },
// //   {
// //     id: '10',
// //     name: 'John J',
// //     position: 'Manager',
// //     department: 'HR',
// //     email: 'john@example.com',
// //     phoneNumber: '123-456-7890',
// //   },
// //   {
// //     id: '11',
// //     name: 'John K',
// //     position: 'Manager',
// //     department: 'HR',
// //     email: 'john@example.com',
// //     phoneNumber: '123-456-7890',
// //   },
// //   {
// //     id: '12',
// //     name: 'John L',
// //     position: 'Manager',
// //     department: 'HR',
// //     email: 'john@example.com',
// //     phoneNumber: '123-456-7890',
// //   },
// //   {
// //     id: '13',
// //     name: 'John M',
// //     position: 'Manager',
// //     department: 'HR',
// //     email: 'john@example.com',
// //     phoneNumber: '123-456-7890',
// //   },
// //   {
// //     id: '14',
// //     name: 'John N',
// //     position: 'Manager',
// //     department: 'HR',
// //     email: 'john@example.com',
// //     phoneNumber: '123-456-7890',
// //   },
// //   {
// //     id: '15',
// //     name: 'John O',
// //     position: 'Manager',
// //     department: 'HR',
// //     email: 'john@example.com',
// //     phoneNumber: '123-456-7890',
// //   },
// //   {
// //     id: '16',
// //     name: 'John P',
// //     position: 'Manager',
// //     department: 'HR',
// //     email: 'john@example.com',
// //     phoneNumber: '123-456-7890',
// //   },
// //   {
// //     id: '17',
// //     name: 'John Q',
// //     position: 'Manager',
// //     department: 'HR',
// //     email: 'john@example.com',
// //     phoneNumber: '123-456-7890',
// //   },
// //   {
// //     id: '18',
// //     name: 'John R',
// //     position: 'Manager',
// //     department: 'HR',
// //     email: 'john@example.com',
// //     phoneNumber: '123-456-7890',
// //   },
// //   {
// //     id: '19',
// //     name: 'John S',
// //     position: 'Manager',
// //     department: 'HR',
// //     email: 'john@example.com',
// //     phoneNumber: '123-456-7890',
// //   },
// //   {
// //     id: '20',
// //     name: 'John T',
// //     position: 'Manager',
// //     department: 'HR',
// //     email: 'john@example.com',
// //     phoneNumber: '123-456-7890',
// //   },
// //   {
// //     id: '21',
// //     name: 'John U',
// //     position: 'Manager',
// //     department: 'HR',
// //     email: 'john@example.com',
// //     phoneNumber: '123-456-7890',
// //   },
// //   {
// //     id: '22',
// //     name: 'John V',
// //     position: 'Manager',
// //     department: 'HR',
// //     email: 'john@example.com',
// //     phoneNumber: '123-456-7890',
// //   },
// //   {
// //     id: '23',
// //     name: 'John W',
// //     position: 'Manager',
// //     department: 'HR',
// //     email: 'john@example.com',
// //     phoneNumber: '123-456-7890',
// //   },
// //   {
// //     id: '24',
// //     name: 'John X',
// //     position: 'Manager',
// //     department: 'HR',
// //     email: 'john@example.com',
// //     phoneNumber: '123-456-7890',
// //   },
// //   {
// //     id: '25',
// //     name: 'John Y',
// //     position: 'Manager',
// //     department: 'HR',
// //     email: 'john@example.com',
// //     phoneNumber: '123-456-7890',
// //   },
// //   {
// //     id: '26',
// //     name: 'John Z',
// //     position: 'Manager',
// //     department: 'HR',
// //     email: 'john@example.com',
// //     phoneNumber: '123-456-7890',
// //   },

// //   // ... Add more employees as needed
// // ];

// // const shift = [
// //   {
// //     employeeId: '3',
// //     start: '',
// //     to: '',
// //     workTime: 'Morning Shift',
// //   },
// //   // ... other shifts
// // ];

// const StaffEmployeeList = ({navigation}) => {
//   const [editedShift, setEditedShift] = useState({ start: '', end: '' });
//   const [employees, setEmployees] = useState([]);
//   const [selectedEmployee, setSelectedEmployee] = useState(null);
//   const [isModalVisible, setModalVisible] = useState(false);

//   useEffect(() => {
//     const fetchAllUsers = async () => {
//       const userRole = await AsyncStorage.getItem('userRole');

//       const allUsers = await UserApi.getAllUsers();
//       setEmployees(allUsers);
//       // if (userRole === 'ADMIN') {
//       //   setEmployees(allUsers.filter(user => ['MANAGER', 'STAFF'].includes(user.role)));
//       // } else if (userRole === 'MANAGER') {
//       //   setEmployees(allUsers.filter(user => user.role === 'STAFF'));
//       //   console.log(employees)
//       // }
//     }

//     fetchAllUsers();
//   }, []);

//   const handleEmployeePress = (employee) => {
//     setSelectedEmployee(employee);
//     setModalVisible(true);
//   };

//   const toggleModal = () => {
//     setSelectedEmployee(null);
//     setModalVisible(!isModalVisible);
//   }; 



//   const handleSaveShift = (employeeId, start, end) => {
//     // Find the shift data for the given employee ID and update it
//     const shiftData = shift.find(s => s.employeeId === employeeId);
//     if (shiftData) {
//       shiftData.start = start;
//       shiftData.to = end;
//     }
//     // console.log(shift);

//     // Set the edited shift state (if needed elsewhere in your component)
//     setEditedShift({ start, end });
//   };


//   return (
//     <ManagerScreenLayout navigation={navigation}>
//       <View style={styles.mainContainer}>
//         <View style={styles.header}>
//           <Text style={styles.headerHeading}> EMPLOYEE LIST </Text>
//         </View>
//         <View style={styles.container}>
//           <FlatList
//             data={employees}
//             renderItem={({item}) => (
//               <EmployeeCards
//                 employee={item}
//                 onPress={() => handleEmployeePress(item)}
//               />
//             )}
//             keyExtractor={item => item.id}
//             showsVerticalScrollIndicator={false}
//             ListFooterComponent={<View style={{height: 130}} />}
//           />
//           <EmployeeDetailsModal
//         isVisible={isModalVisible}
//         employee={selectedEmployee}
//         onClose={toggleModal}
//         onSaveShift={handleSaveShift}
//       />
//         </View>
//       </View>
//     </ManagerScreenLayout>
//   );
// };

// const styles = StyleSheet.create({
//   mainContainer: {
//     backgroundColor: '#001F3F',
//   },
//   header: {
//     // backgroundColor: '#001F3F',
//     padding: 15,
//   },
//   headerHeading: {
//     color: '#fff',
//     fontSize: 20,
//     fontWeight: 'bold',
//     paddingBottom: 3,
//   },
//   container: {
//     backgroundColor: 'rgb(238, 242, 251)',
//     borderTopLeftRadius: 40,
//     borderTopRightRadius: 40,
//     paddingTop: 13,
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100%',
//   },
// });

// export default StaffEmployeeList;


import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text, ActivityIndicator, TextInput } from 'react-native';
import EmployeeCardsAdmin from '../../components/EmployeeCards';
import EmployeeDetailsModal from '../../components/EmployeeDetailsModal';
import ManagerScreenLayout from '../../layouts/ManagerScreenLayout';
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BranchApi from '../../services/BranchApi';
import AttendanceLogModal from '../../components/ManagerComponents/AttendanceLogModal';
import Icon from 'react-native-vector-icons/FontAwesome';


const StaffEmployeeList = ({ navigation }) => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [editedShift, setEditedShift] = useState({ start: '', end: '' });
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const isFocused = useIsFocused();
  const [isAttendanceModalVisible, setAttendanceModalVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  

  useEffect(() => {
    if (isFocused) {
        const fetchAllUsers = async () => {
            setIsLoading(true);
            try {
              const bunkId = await AsyncStorage.getItem('bunkId');
              // console.log(bunkId);
                const users = await BranchApi.getStaffForBranch(bunkId);
                setEmployees(users.filter(user => user.role === 'STAFF'));
            } catch (error) {
                console.error('Failed to fetch users:', error);
            }
            setIsLoading(false);
        };

        fetchAllUsers();
    }
}, [isFocused]);

useEffect(() => {
  if (searchText) {
    const results = employees.filter(emp => emp.name.toLowerCase().includes(searchText.toLowerCase()));
    setFilteredEmployees(results);
  } else {
    setFilteredEmployees(employees);
  }
}, [searchText, employees]);


  const handleEmployeePress = (employee) => {
    setSelectedEmployee(employee);
    setModalVisible(true);
  };

  const toggleModal = () => {
    setSelectedEmployee(null);
    setModalVisible(!isModalVisible);
  };

  const showAttendanceLog = () => {
    setModalVisible(false);  
    setAttendanceModalVisible(true);  
  };

  return (
    <ManagerScreenLayout navigation={navigation}>
      {isLoading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#001F3F" />
        </View>
      ) : (
        <View style={styles.mainContainer}>
          <View style={styles.header}>
            <Text style={styles.headerHeading}> EMPLOYEE LIST </Text>
            <View>
            <View style={{flexDirection: 'row',justifyContent:'space-around', alignItems: 'center'}}>
      <Icon name="search" size={15} color="#fff" style={{alignItems: 'center', justifyContent: 'center', padding:3}} />
   
            <TextInput
              style={styles.searchInput}
              placeholder="Search Employee"
              onChangeText={text => setSearchText(text)}
              value={searchText}
              placeholderTextColor={'#fff'}
            />
             </View>
            </View>
          </View>
          <View style={styles.container}>
            <FlatList
              data={filteredEmployees}
              renderItem={({ item }) => (
                <EmployeeCardsAdmin
                  employee={item}
                  onPress={() => handleEmployeePress(item)}
                />
              )}
              keyExtractor={item => item.id.toString()}
              showsVerticalScrollIndicator={false}
              ListFooterComponent={<View style={{ height: 130 }} />}
            />
            <EmployeeDetailsModal
              isVisible={isModalVisible}
              employee={selectedEmployee}
              onClose={toggleModal}
              onShowAttendanceLog={showAttendanceLog}
            />
            <AttendanceLogModal
              isVisible={isAttendanceModalVisible}
              onDismiss={() => setAttendanceModalVisible(false)}
              staffId={selectedEmployee?.id}
            />
          </View>
        </View>
      )}
    </ManagerScreenLayout>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#001F3F',
  },
  header: {
    // backgroundColor: '#001F3F',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerHeading: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 3,
    alignItems: 'center'
  },
  searchInput: {
    color: '#fff',
    padding:0,
    margin:0,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    fontSize: 16,
  },
  container: {
    backgroundColor: 'rgb(238, 242, 251)',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 13,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#001F3F',
  },
  
});

export default StaffEmployeeList;
