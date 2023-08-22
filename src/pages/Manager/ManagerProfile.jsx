import React from 'react';
import {Text} from 'react-native';
import ManagerScreenLayout from '../../layouts/ManagerScreenLayout';

const ManagerProfile = ({navigation}) => {
  return (
    <ManagerScreenLayout navigation={navigation}>
        <Text style={{color: '#000'}}>Manager Profile </Text>
      </ManagerScreenLayout>
  );
};

export default ManagerProfile;
