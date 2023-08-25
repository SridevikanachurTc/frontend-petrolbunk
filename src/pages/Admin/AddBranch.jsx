import React from 'react';
import {Text} from 'react-native';
import AdminScreenLayout from '../../layouts/AdminScreenLayout';
import AddBranchForm from '../../components/AdminComponents/AddBranchForm';

const AddBranch = ({navigation}) => {

  const handleFormSubmit = (address) => {
    // Here, you can perform your logic with the address submitted from the form
    console.log("Address submitted: ", address);
    // For example, you can save it to your backend, or navigate to a new screen etc.
};

  return (
    <AdminScreenLayout navigation={navigation}>
        <AddBranchForm onSubmit={handleFormSubmit}/>
      </AdminScreenLayout>
  );
};

export default AddBranch;
