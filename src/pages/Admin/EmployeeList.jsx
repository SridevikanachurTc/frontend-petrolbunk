import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AdminScreenLayout from '../../layouts/AdminScreenLayout';
import EmployeeCards from '../../components/EmployeeCards';
import EmployeeDetailsModal from '../../components/EmployeeDetailsModal';
import UserApi from '../../services/UserApi';
import { useIsFocused } from '@react-navigation/native';
import AttendanceLogModal from '../../components/ManagerComponents/AttendanceLogModal';

const EmployeeList = ({ navigation }) => {
  const [employees, setEmployees] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isAttendanceModalVisible, setAttendanceModalVisible] = useState(false); // State for Attendance Log Modal
  const isFocused = useIsFocused();

  // console.log("employee sent to cards", filteredEmployees);

  useEffect(() => {
    const fetchAllUsers = async () => {
      const allUsers = await UserApi.getAllUsers();
      const sortedUsers = allUsers
          .filter(user => ['BRANCH_MANAGER', 'STAFF'].includes(user.role))
          .sort((a, b) => {
              if (a.role === 'BRANCH_MANAGER' && b.role === 'STAFF') return -1;
              if (a.role === 'STAFF' && b.role === 'BRANCH_MANAGER') return 1;
              return 0;
          });
      setEmployees(sortedUsers);
    }
  
    if (isFocused) {
      fetchAllUsers();
    }

  }, [isFocused]);

  useEffect(() => {
    if (searchText) {
      const results = employees.filter(emp => 
        emp.name.toLowerCase().includes(searchText.toLowerCase())
      );
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

  // Function to show the Attendance Log Modal
  const showAttendanceLog = () => {
    setModalVisible(false);  
    setAttendanceModalVisible(true);  
  };

  return (
    <AdminScreenLayout navigation={navigation}>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <Text style={styles.headerHeading}> EMPLOYEE LIST </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
            <Icon name="search" size={15} color="#fff" style={{ alignItems: 'center', justifyContent: 'center', padding: 3 }} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search Employee"
              onChangeText={text => setSearchText(text)}
              value={searchText}
              placeholderTextColor={'#fff'}
            />
          </View>
        </View>
        <View style={styles.container}>
          <FlatList
            data={filteredEmployees}
            renderItem={({ item }) => (
              <EmployeeCards
                employee={item}
                onPress={() => handleEmployeePress(item)}
              />
            )}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={<View style={{height: 130}} />}
          />
          <EmployeeDetailsModal
            isVisible={isModalVisible}
            employee={selectedEmployee}
            onClose={toggleModal}
            onShowAttendanceLog={showAttendanceLog} // Pass the function to show Attendance Log Modal
          />
          <AttendanceLogModal
            isVisible={isAttendanceModalVisible}
            onDismiss={() => setAttendanceModalVisible(false)}
            staffId={selectedEmployee?.id}
          />
        </View>
      </View>
    </AdminScreenLayout>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#001F3F',
  },
  header: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerHeading: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 3,
    alignItems: 'center',
  },
  searchInput: {
    color: '#fff',
    padding: 0,
    margin: 0,
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
});

export default EmployeeList;
