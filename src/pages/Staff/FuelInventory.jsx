import React, { useEffect, useState } from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import StaffScreenLayout from '../../layouts/StaffScreenLayout';
import FuelInventoryLevelCard from '../../components/ManagerComponents/FuelInventoryLevelCard';
import UserApi from '../../services/UserApi';
import FuelInventoryApi from '../../services/FuelInventoryApi';


const FuelInventory = ({ navigation }) => {
  const [staffId, setStaffId] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const userDetails = await UserApi.fetchUserDetails();
        setStaffId(userDetails.id);
      } catch (error) {
        console.error("Failed fetching user details:", error);
      }
    };

    fetchDetails();
  }, []);

  const handleRaiseRequest = async () => {
    try {
      await FuelInventoryApi.raiseFuelRequest(staffId);
      Alert.alert('Success', 'Fuel fill request raised successfully.');
    } catch (error) {
      Alert.alert('Already Requested', 'A request already exists for the same bunk today.');
    }
  };

  return (
    <StaffScreenLayout navigation={navigation}>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <Text style={styles.headerHeading}>FUEL INVENTORY</Text>
        </View>
        <View style={styles.container}>
          <FuelInventoryLevelCard />
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity onPress={handleRaiseRequest}>
              <Text style={styles.text}>Raise Fuel Fill Request</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </StaffScreenLayout>
  );
};


const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#001F3F'
  },
  header: {
    // backgroundColor: '#001F3F',
    padding: 15,
  },
  headerHeading:{
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 3,
  },
  container: {
    backgroundColor: 'rgb(238, 242, 251)',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    height: '100%'
  },
  text:{
    backgroundColor: '#001F3F',
    width: '50%',
    color: '#fff',
    textAlign: 'center',
    marginTop: 80,
    // position: 'relative',
    // top: '10%',
    // left: '25%',
    padding: 20,
    borderRadius: 20
  },
});

export default FuelInventory;
