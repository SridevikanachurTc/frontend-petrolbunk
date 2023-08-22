import React from 'react';
import {Text} from 'react-native';
import ManagerScreenLayout from '../../layouts/ManagerScreenLayout';

const FuelOrder = ({navigation}) => {
  return (
    <ManagerScreenLayout navigation={navigation}>
        <Text style={{color: '#000'}}>Fuel order</Text>
      </ManagerScreenLayout>
  );
};

export default FuelOrder;
