import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import ManagerStatsApi from '../../services/ManagerStatsApi';
import { useFocusEffect } from '@react-navigation/native';


const CARD_WIDTH = Dimensions.get('window').width / 2 - 20; // Subtracting 20 for padding/margin

function ManagerTotalEmployeesCard() {
  const [staffCount, setStaffCount] = useState(null);


    const fetchStaffCount = useCallback(async () => {
      try {
        const bunkId = await AsyncStorage.getItem('bunkId');
        if (bunkId) {
          const count = await ManagerStatsApi.getStaffCount(bunkId);
          setStaffCount(count);
          console.log(count);
        }
      } catch (error) {
        console.error('Failed to fetch staff count:', error);
      }
    }, []);  
    
   
    useFocusEffect(
      useCallback(() => {
        fetchStaffCount();
        return () => {};  
      }, [fetchStaffCount])
    );


 return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <Icon name="users" size={36} color="#001F3F" />
      </View>
      <Text style={styles.numberText}>{staffCount || 'Loading...'}</Text>
      <Text style={styles.salesText}>Total Employees</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    margin: 10,
  },
  iconContainer: {
    backgroundColor: 'rgb(204, 220, 236)',
    width: 70,
    height: 70,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#001F3F',
    marginVertical: 10,
  },
  salesText: {
    fontSize: 16,
    color: '#001F3F',
  }
});

export default ManagerTotalEmployeesCard;
