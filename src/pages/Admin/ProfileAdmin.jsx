import React from 'react';
import {Text} from 'react-native';
import AdminScreenLayout from '../../layouts/AdminScreenLayout';

const ProfileAdmin = ({navigation}) => {
  return (
    <AdminScreenLayout navigation={navigation}>
        <Text style={{color: '#000'}}> Profile</Text>
      </AdminScreenLayout>
  );
};

export default ProfileAdmin;
