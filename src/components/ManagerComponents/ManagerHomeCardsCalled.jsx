import React from 'react';
import {View, StyleSheet} from 'react-native';
import BranchCountCard from '../HomeCards/BranchCountCard';
import ManagerSalesCard from '../HomeCards/ManagerSalesCard';
import ManagerTotalEmployeesCard from '../HomeCards/ManagerTotalEmployeesCard';
import ManagerFuelOrderCard from '../HomeCards/ManagerFuelOrderCard';

function ManagerHomeCardsCalled() {
  return (
    <View style={styles.container}>
      {/* <BranchCountCard /> */}
      <ManagerTotalEmployeesCard />
      <ManagerSalesCard />
      <ManagerFuelOrderCard />
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

export default ManagerHomeCardsCalled;
