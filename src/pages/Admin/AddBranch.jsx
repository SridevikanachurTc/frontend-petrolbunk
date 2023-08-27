import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import AdminScreenLayout from '../../layouts/AdminScreenLayout';
import AddBranchCard from '../../components/AdminComponents/AddBranchCard';
import AddEmployeeModal from '../../components/AddEmployeeModal';
import AddBranchForm from '../../components/AdminComponents/AddBranchForm';

const AddBranch = ({ navigation }) => {

  const dummyBranchData = [
    {
        id: '1',
        branchName: 'Central HQ',
        location: 'Downtown',
        level: '40'
    },
    {
        id: '2',
        branchName: 'North Outlet',
        location: 'Uptown',
        level: '40'
    },
    {
        id: '3',
        branchName: 'South Outlet',
        location: 'Suburbia',
        level: '40'
    },
    {
        id: '4',
        branchName: 'East Corner',
        location: 'Eastville',
        level: '40'
    },
    {
        id: '5',
        branchName: 'West Station',
        location: 'Westtown',
        level: '40'
    },
    {
        id: '6',
        branchName: 'Midtown Spot',
        location: 'Centreville',
        level: '40'
    }
];


const [isModalVisible, setModalVisible] = useState(false);
const [isBranchVisible, setBranchVisible] = useState(false);
const [branches, setBranches] = useState(dummyBranchData);
const [selectedBranch, setSelectedBranch] = useState(null);

const handleFormSubmit = (data) => {
    if (selectedBranch) {
      // Update selected branch with employee data
      const updatedBranches = branches.map(branch =>
        branch.id === selectedBranch.id
          ? { 
              ...branch, 
              employees: branch.employees 
                            ? [...branch.employees, data] 
                            : [data] 
            }
          : branch
      );
      setBranches(updatedBranches);
      setSelectedBranch(null);
    }
    toggleModal();
  };

  const handleBranchFormSubmit = (data) => {
    setBranches(prevBranches => [...prevBranches, data]);
};


const toggleModal = (branchId) => {
  setSelectedBranch(branches.find(branch => branch.id === branchId));
  setModalVisible(!isModalVisible);
};   

const toggleBranchModal = () => {
  setBranchVisible(!isBranchVisible);
};   

    return (
        <AdminScreenLayout navigation={navigation}>
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={toggleBranchModal}>
                    <Icon name="plus-circle" size={38} color="#000" />
                </TouchableOpacity>
            </View>
            <Text style={styles.heading}>Branch List</Text>
            
            <FlatList
        data={branches}
        renderItem={({ item }) => (
          <AddBranchCard
            branchName={item.branchName}
            locationName={item.location}
            onPress={() => toggleModal(item.id)}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
      <AddEmployeeModal
        isVisible={isModalVisible}
        closeModal={toggleModal}
        onSubmit={handleFormSubmit}
        selectedBranch={selectedBranch}
      />

<AddBranchForm
                isVisible={isBranchVisible} 
                onDismiss={toggleBranchModal}
                onSubmit={handleBranchFormSubmit}
            />

        </AdminScreenLayout>
    );
};

const styles = StyleSheet.create({
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 10,
    },
    heading: {
        fontSize: 24,
        textAlign: 'center',
        paddingVertical: 10,
    }
});

export default AddBranch;
