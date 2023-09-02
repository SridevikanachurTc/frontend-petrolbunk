import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ManagerStatsApi from '../../services/ManagerStatsApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const CARD_WIDTH = Dimensions.get('window').width / 2 - 20; 

function ManagerFuelOrderCard() {
  const [activeOrders, setActiveOrders] = useState(null); 


  const fetchActiveOrders = useCallback(async () => {  
    try {
      const bunkId = await AsyncStorage.getItem('bunkId');
      if (bunkId) {
        const count = await ManagerStatsApi.getActiveOrdersCount(bunkId);
        setActiveOrders(count);
      }
    } catch (error) {
      console.error('Failed to fetch active orders count:', error);
    }
  }, []);  

  
  useFocusEffect(
    useCallback(() => {
      fetchActiveOrders();
      return () => {};  
    }, [fetchActiveOrders])
  );


  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <Icon name="label" size={36} color="#001F3F" />
      </View>
      <Text style={styles.numberText}>{(activeOrders === null) ? 'Loading...' : activeOrders}</Text> 
      <Text style={styles.salesText}>Fuel Orders</Text>
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

export default ManagerFuelOrderCard;
