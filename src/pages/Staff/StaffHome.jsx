import React from 'react';
import {Text} from 'react-native';
import StaffScreenLayout from '../../layouts/StaffScreenLayout';

const StaffHome = ({navigation}) => {
  return (
    <StaffScreenLayout navigation={navigation}>
        <Text style={{color: '#000'}}>Staff home</Text>
      </StaffScreenLayout>
  );
};

export default StaffHome;
