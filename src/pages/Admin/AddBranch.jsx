import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import AdminScreenLayout from '../../layouts/AdminScreenLayout';
import AddBranchCard from '../../components/AdminComponents/AddBranchCard';
import AddEmployeeModal from '../../components/AddEmployeeModal';
import AddBranchForm from '../../components/AdminComponents/AddBranchForm';
import BranchApi from '../../services/BranchApi';

const AddBranch = ({navigation}) => {
  // const dummyBranchData = [
  //   {
  //     id: '1',
  //     branchName: 'Central HQ',
  //     location: 'Downtown',
  //     level: '40',
  //   },
  //   {
  //     id: '2',
  //     branchName: 'North Outlet',
  //     location: 'Uptown',
  //     level: '40',
  //   },
  //   {
  //     id: '3',
  //     branchName: 'South Outlet',
  //     location: 'Suburbia',
  //     level: '40',
  //   },
  //   {
  //     id: '4',
  //     branchName: 'East Corner',
  //     location: 'Eastville',
  //     level: '40',
  //   },
  //   {
  //     id: '5',
  //     branchName: 'West Station',
  //     location: 'Westtown',
  //     level: '40',
  //   },
  //   {
  //     id: '6',
  //     branchName: 'Midtown Spot',
  //     location: 'Centreville',
  //     level: '40',
  //   },
  // ];

  const [isModalVisible, setModalVisible] = useState(false);
  const [isBranchVisible, setBranchVisible] = useState(false);
  const [branches, setBranches] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [managerExists, setManagerExists] = useState(false);



  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const fetchedBranches = await BranchApi.getBranches();
        setBranches(fetchedBranches);
      } catch (error) {
        console.error("Failed to fetch branch details", error);
      }
    }

    fetchBranches();
  }, []);

  const handleFormSubmit = async (managerDetails, branchId) => {
    try {
      console.log(managerDetails);
      console.log(branchId);
      await BranchApi.createManager(branchId, managerDetails);
      console.log('createdddd manager')
      setModalVisible(false); 
    } catch (error) {
      // if (error.response && error.response.status === 500) { 
      //   setManagerExists(true);
      //   alert('Manager exists');
      // } else {
        console.error('Failed to add manager', error);
      // }
    }
  };

  const toggleModal = async branchId => {
    setManagerExists(false); 
  
    // When the modal is closing, fetch latest branches
    if (isModalVisible) {
      try {
        const fetchedBranches = await BranchApi.getBranches();
        setBranches(fetchedBranches);
      } catch (error) {
        console.error("Failed to fetch branch details", error);
      }
    }

    // Check if a manager exists for the branch
    // try {
      const existingManager = await BranchApi.checkManagerExistsForBranch(branchId);
      console.log(existingManager);
      if (existingManager) {
        setManagerExists(true);
        Alert.alert('Manager Exists', 'A manager already exists for this branch.');
        return;
      } else {
        setSelectedBranch(branches.find(branch => branch.id === branchId));
        setModalVisible(!isModalVisible);
      }
    // } catch (error) {
    //   console.error("Failed to check if manager exists:", error);
    // }
  };


  const handleBranchFormSubmit = (newBranch) => {
    setBranches(prevBranches => [...prevBranches, newBranch]);
  };
  

  const toggleBranchModal = () => {
    setBranchVisible(!isBranchVisible);
  };

  const toggleCloseModal =() => {
    setModalVisible(!isModalVisible);
  };

  return (
    <AdminScreenLayout navigation={navigation}>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <Text style={styles.headerHeading}>BRANCH LIST</Text>
          <TouchableOpacity onPress={toggleBranchModal}>
            <Icon name="plus-circle" size={33} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <FlatList
            data={branches}
            renderItem={({item}) => (
              <AddBranchCard
                name={item.name}
                locationName={item.location}
                onPress={() => toggleModal(item.id)}
              />
            )}
            keyExtractor={item => item.id}
            numColumns={2}
          />
          {managerExists && <Text style={{ color: 'red' }}>Manager already exists for this branch!</Text>} 
          <AddEmployeeModal
            isVisible={isModalVisible}
            closeModal={toggleModal}
            cancleClose={toggleCloseModal}
            onSubmit={handleFormSubmit}
            selectedBranch={selectedBranch}
          />

          <AddBranchForm
            isVisible={isBranchVisible}
            onDismiss={toggleBranchModal}
            onSubmit={handleBranchFormSubmit}
          />
        </View>
      </View>
    </AdminScreenLayout>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#001F3F',
  },
  header: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerHeading: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 3,
  },
  container: {
    backgroundColor: 'rgb(238, 242, 251)',
    height: '100%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingLeft: 3,
    paddingTop:13,
    justifyContent: 'center',
    alignItems:'center'
  },
});

export default AddBranch;
