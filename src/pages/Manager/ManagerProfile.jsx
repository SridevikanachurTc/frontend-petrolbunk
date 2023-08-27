import React, { useState, useEffect } from 'react';
import Profile from '../../components/Profile';
import AdminScreenLayout from '../../layouts/AdminScreenLayout';
import ManagerScreenLayout from '../../layouts/ManagerScreenLayout';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const ManagerProfile = ({ navigation }) => {

  const employee = {
      id: '1',
      name: 'John A',
      age: '22',
      position: 'Manager',
      address: 'abc',
      email: 'john@example.com',
      phoneNumber: '123-456-7890',
    };
  // const [employee, setEmployee] = useState(null);

  // useEffect(() => {
  //   const fetchEmployeeDetails = async () => {
  //     try {
  //       const userId = await AsyncStorage.getItem('loggedInUserId');
  //       if (userId) {
  //         // In a real-world application, you'd make a fetch/API call here to get the user's details using their ID.
  //         // Here, I'm using a mock data for the purpose of the example.
  //         const mockData = {
  //           id: '1',
  //           name: 'John Doe',
  //           position: 'Manager',
  //           email: 'john@example.com',
  //         };

  //         if (mockData.id === userId) {
  //           setEmployee(mockData);
  //         }
  //       }
  //     } catch (error) {
  //       console.error("Failed to fetch employee's details", error);
  //     }
  //   };

  //   fetchEmployeeDetails();
  // }, []);

  if (!employee) return null;

  return (
    <ManagerScreenLayout navigation={navigation}>
      <Profile employee={employee}/>
      </ManagerScreenLayout>
  );
};

export default ManagerProfile;
