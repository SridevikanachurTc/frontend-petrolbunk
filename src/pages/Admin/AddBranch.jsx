import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import AdminScreenLayout from '../../layouts/AdminScreenLayout';
import AddBranchForm from '../../components/AdminComponents/AddBranchForm';
import AddBranchCard from '../../components/AdminComponents/AddBranchCard';

const AddBranch = ({ navigation }) => {

  const dummyBranchData = [
    {
        id: '1',
        branchName: 'Central HQ',
        location: 'Downtown'
    },
    {
        id: '2',
        branchName: 'North Outlet',
        location: 'Uptown'
    },
    {
        id: '3',
        branchName: 'South Outlet',
        location: 'Suburbia'
    },
    {
        id: '4',
        branchName: 'East Corner',
        location: 'Eastville'
    },
    {
        id: '5',
        branchName: 'West Station',
        location: 'Westtown'
    },
    {
        id: '6',
        branchName: 'Midtown Spot',
        location: 'Centreville'
    }
];


    const [isModalVisible, setModalVisible] = useState(false);
    // const [branches, setBranches] = useState([]); // Empty initially
    const [branches, setBranches] = useState(dummyBranchData);

    const handleFormSubmit = (data) => {
        setBranches(prevBranches => [...prevBranches, data]);
    };

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <AdminScreenLayout navigation={navigation}>
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={toggleModal}>
                    <Icon name="plus-circle" size={38} color="#000" />
                </TouchableOpacity>
            </View>
            <Text style={styles.heading}>Branch List</Text>
            
            <FlatList
                data={branches}
                renderItem={({ item }) => (
                    <AddBranchCard branchName={item.branchName} locationName={item.location} />
                )}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
            />

            <AddBranchForm
                isVisible={isModalVisible} 
                onDismiss={toggleModal}
                onSubmit={handleFormSubmit}
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
