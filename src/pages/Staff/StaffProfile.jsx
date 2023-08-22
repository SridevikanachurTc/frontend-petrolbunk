import React from 'react';
import {Text} from 'react-native';
import StaffScreenLayout from '../../layouts/StaffScreenLayout';

const StaffProfile = ({navigation}) => {
  return (
    <StaffScreenLayout navigation={navigation}>
        <Text style={{color: '#000'}}>Staff Profile</Text>
      </StaffScreenLayout>
  );
};

export default StaffProfile;
