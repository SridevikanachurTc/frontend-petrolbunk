import React from 'react';
import {Text} from 'react-native';
import StaffScreenLayout from '../../layouts/StaffScreenLayout';

const FuelInventory = ({navigation}) => {
  return (
    <StaffScreenLayout navigation={navigation}>
        <Text style={{color: '#000'}}> Fuel level</Text>
      </StaffScreenLayout>
  );
};

export default FuelInventory;
