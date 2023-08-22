import React from 'react';
import {Text} from 'react-native';
import ManagerScreenLayout from '../../layouts/ManagerScreenLayout';

const AddStaff = ({navigation}) => {
  return (
    <ManagerScreenLayout navigation={navigation}>
        <Text style={{color: '#000'}}>Add Staff</Text>
      </ManagerScreenLayout>
  );
};

export default AddStaff;
