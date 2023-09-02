import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import AdminStatsApi from '../../services/AdminStatsApi';
import { useFocusEffect } from '@react-navigation/native';

const CARD_WIDTH = Dimensions.get('window').width / 2 - 20; 

function SalesCard() {
  const [salesData, setSalesData] = useState(null);


    const fetchSalesData = useCallback(async () => {
      try {
        const data = await AdminStatsApi.getTotalFuelSold();
        setSalesData(data);
      } catch (error) {
        console.error("Error fetching sales data:", error);
      }
    }, []);  

   
    useFocusEffect(
      useCallback(() => {
        fetchSalesData();
        return () => {};  
      }, [fetchSalesData])
    );

  const formattedsales = parseInt(salesData); 


  if (!salesData) return null; 

  return (
    <View style={styles.card}>
        <View style={styles.iconContainer}>
      <Icon name="line-chart" size={36} color="#001F3F" />
      </View>
      <Text style={styles.numberText}>{salesData ? formattedsales : 'Loading...'}</Text>
      <Text style={styles.salesText}>Sales(in Litres)</Text>
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

export default SalesCard;
