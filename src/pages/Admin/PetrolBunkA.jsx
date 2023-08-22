import React from 'react';
import {Text} from 'react-native';
import AdminScreenLayout from '../../layouts/AdminScreenLayout';

const PetrolBunkA = ({navigation}) => {
  return (
    <AdminScreenLayout navigation={navigation}>
        <Text style={{color: '#000'}}> Petrol</Text>
      </AdminScreenLayout>
  );
};

export default PetrolBunkA;
