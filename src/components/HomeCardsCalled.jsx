import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomersCard from './HomeCards/CustomersCard';
import FuelQuantityCard from './HomeCards/FuelQuantityCard';
import TotalFuelOrderCard from './HomeCards/TotalFuelOrderCard';
import SalesCard from './HomeCards/SalesCard';

function HomeCardsCalled() {
  return (
    <View style={styles.container}>
        <SalesCard />
        <CustomersCard />
        <FuelQuantityCard />
        <TotalFuelOrderCard />
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  }
});

export default HomeCardsCalled;
