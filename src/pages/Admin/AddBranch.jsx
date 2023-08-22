import React from 'react';
import {Text} from 'react-native';
import AdminScreenLayout from '../../layouts/AdminScreenLayout';

const AddBranch = ({navigation}) => {
  return (
    <AdminScreenLayout navigation={navigation}>
        <Text style={{color: '#000'}}>Add Branch</Text>
      </AdminScreenLayout>
  );
};

export default AddBranch;
