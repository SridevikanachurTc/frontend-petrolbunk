import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import Profile from '../../components/Profile';
import StaffScreenLayout from '../../layouts/StaffScreenLayout';
import UserApi from '../../services/UserApi';

const StaffProfile = ({ navigation }) => {
  const [employee, setEmployee] = useState(null);

  useFocusEffect(
    React.useCallback(() => {
      const getUserDetails = async () => {
        try {
          const userDetails = await UserApi.fetchUserDetails();
          setEmployee(userDetails);
        } catch (error) {
          console.error("Error fetching user details:", error);
        }
      };

      getUserDetails();
     
    }, [])
  );

  if (!employee) return null; 

  return (
    <StaffScreenLayout navigation={navigation}>
      <Profile employee={employee} />
    </StaffScreenLayout>
  );
};

export default StaffProfile;
