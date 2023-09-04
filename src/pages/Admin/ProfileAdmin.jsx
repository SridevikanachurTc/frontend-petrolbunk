import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import Profile from '../../components/Profile';
import AdminScreenLayout from '../../layouts/AdminScreenLayout';
import UserApi from '../../services/UserApi';

const ProfileAdmin = ({ navigation }) => {
  const [employee, setEmployee] = useState(null);

  useFocusEffect(
    React.useCallback(() => {
      const fetchEmployeeDetails = async () => {
        try {
          const userDetails = await UserApi.fetchUserDetails();
          setEmployee(userDetails);
        } catch (error) {
          console.error("Failed to fetch employee's details", error);
        }
      };

      fetchEmployeeDetails();

      return () => {}; 
    }, [])
  );

  if (!employee) return null;

  return (
    <AdminScreenLayout navigation={navigation}>
      <Profile employee={employee} />
    </AdminScreenLayout>
  );
};

export default ProfileAdmin;
