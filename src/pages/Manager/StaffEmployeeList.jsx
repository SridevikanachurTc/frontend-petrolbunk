import React from 'react';
import {Text} from 'react-native';
import ManagerScreenLayout from '../../layouts/ManagerScreenLayout';

const StaffEmployeeList = ({navigation}) => {
  return (
    <ManagerScreenLayout navigation={navigation}>
        <Text style={{color: '#000'}}>Staff employee list</Text>
      </ManagerScreenLayout>
  );
};

export default StaffEmployeeList;
