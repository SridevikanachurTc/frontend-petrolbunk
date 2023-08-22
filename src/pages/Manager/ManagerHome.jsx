import React from 'react';
import {Text} from 'react-native';
import ManagerScreenLayout from '../../layouts/ManagerScreenLayout';

const ManagerHome = ({navigation}) => {
  return (
    <ManagerScreenLayout navigation={navigation}>
        <Text style={{color: '#000'}}>Manager home</Text>
      </ManagerScreenLayout>
  );
};

export default ManagerHome;
