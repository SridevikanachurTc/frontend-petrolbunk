import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import Profile from '../../components/Profile';
import ManagerScreenLayout from '../../layouts/ManagerScreenLayout';
import UserApi from '../../services/UserApi';

const ManagerProfile = ({ navigation }) => {
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
    <ManagerScreenLayout navigation={navigation}>
      <Profile employee={employee} />
    </ManagerScreenLayout>
  );
};

export default ManagerProfile;
