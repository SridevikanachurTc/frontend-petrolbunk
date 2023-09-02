import React from 'react';
import {View, StyleSheet} from 'react-native';
import TotalFuelOrderCard from '../HomeCards/TotalFuelOrderCard';
import EmployeesCard from '../HomeCards/EmployeesCard';
import BranchCountCard from '../HomeCards/BranchCountCard';
import SalesCard from '../HomeCards/SalesCard';

function AdminHomeCardsCalled() {
  return (
    <View style={styles.container}>
      <BranchCountCard />
      <EmployeesCard />
      <SalesCard />
      <TotalFuelOrderCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export default AdminHomeCardsCalled;
