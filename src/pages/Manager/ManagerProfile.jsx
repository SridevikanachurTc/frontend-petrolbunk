import React, { useState, useEffect } from 'react';
import Profile from '../../components/Profile';
import ManagerScreenLayout from '../../layouts/ManagerScreenLayout';
import UserApi from '../../services/UserApi';


const ManagerProfile = ({ navigation }) => {
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployeeDetails = async () => {
      try {
        const userDetails = await UserApi.fetchUserDetails();
        setEmployee(userDetails);
      } catch (error) {
        console.error("Failed to fetch employee's details", error);
      }
    };

    fetchEmployeeDetails();
  }, []);

  if (!employee) return null;

  return (
    <ManagerScreenLayout navigation={navigation}>
      <Profile employee={employee}/>
      </ManagerScreenLayout>
  );
};

export default ManagerProfile;
