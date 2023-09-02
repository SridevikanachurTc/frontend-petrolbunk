import React, { useState, useEffect } from 'react';
import Profile from '../../components/Profile';
import StaffScreenLayout from '../../layouts/StaffScreenLayout';
import UserApi from '../../services/UserApi';

const StaffProfile = ({ navigation }) => {
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const userDetails = await UserApi.fetchUserDetails();
        setEmployee(userDetails); 
        // Assuming the API response has the same structure as the 'employee' object. 
        // If not, you'll need to map the API response to match the 'employee' structure.
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    getUserDetails();
  }, []);

  if (!employee) return null;  // this will ensure the component returns null while the data is still loading

  return (
    <StaffScreenLayout navigation={navigation}>
      <Profile employee={employee} />
    </StaffScreenLayout>
  );
};

export default StaffProfile;
