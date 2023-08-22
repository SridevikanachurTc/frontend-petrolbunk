import React from 'react';
import {Text} from 'react-native';
import AdminScreenLayout from '../../layouts/AdminScreenLayout';

const AdminHome = ({navigation}) => {
  return (
    <AdminScreenLayout navigation={navigation}>
        <Text style={{color: '#000'}}>Home </Text>
      </AdminScreenLayout>
  );
};

export default AdminHome;
