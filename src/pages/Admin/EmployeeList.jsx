import React from 'react';
import {Text} from 'react-native';
import AdminScreenLayout from '../../layouts/AdminScreenLayout';

const EmployeeList = ({navigation}) => {
  return (
    <AdminScreenLayout navigation={navigation}>
        <Text style={{color: '#000'}}>Employee List</Text>
      </AdminScreenLayout>
  );
};

export default EmployeeList;
