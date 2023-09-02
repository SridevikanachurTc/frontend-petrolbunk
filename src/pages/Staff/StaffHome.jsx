import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StaffScreenLayout from '../../layouts/StaffScreenLayout';
import ClockIn from '../../components/StaffComponents/ClockIn';
import AttendanceLog from '../../components/StaffComponents/AttendanceLog';
import UserApi from '../../services/UserApi';

const StaffHome = ({ navigation }) => {
  const [shiftDetails, setShiftDetails] = useState(null);
  const image = require('C:/Users/rashi/Desktop/frontendPetrolBunk/petrolBunkFrontend/src/data/clock-in.jpg');  

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await UserApi.fetchUserDetails();
        setShiftDetails(data);
        console.log(shiftDetails);
      } catch (error) {
        console.error("Failed fetching user details:", error);
      }
    };

    fetchDetails();
  }, []);

  if (!shiftDetails) return null; 

  return (
    <StaffScreenLayout navigation={navigation}>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <Text style={styles.headerHeading}>DASHBOARD</Text>
        </View>
        <View style={styles.container}>
          <ClockIn staffId={shiftDetails.id} shift={shiftDetails.shift} image={image}/>
          <AttendanceLog staffId={shiftDetails.id} />
        </View>
      </View>
    </StaffScreenLayout>
  );
};


const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#001F3F',
  },
  header: {
    padding: 15,
  },
  headerHeading: {
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
});

export default StaffHome;
