import React from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';
import AdminScreenLayout from '../../layouts/AdminScreenLayout';
import LineGraph from '../../graphs/LineGraph';
import RingGraph from '../../graphs/RingGraph';
import BarGraph from '../../graphs/BarGraph';
import AdminHomeCardsCalled from '../../components/AdminComponents/AdminHomeCardsCalled';

const AdminHome = ({navigation}) => {
  const renderItem = ({item}) => {
    const Component = item.component;
    return <Component />;
  };

  const data = [
    {id: '1', component: AdminHomeCardsCalled},
    {id: '2', component: LineGraph},
    {id: '3', component: BarGraph},
    {id: '4', component: RingGraph},
  ];

  return (
    <AdminScreenLayout navigation={navigation}>
      <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.headerHeading}>DASHBOARD</Text>
      </View>
      <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={<View style={{height: 8}} />}
        ListFooterComponent={<View style={{height: 120}} />} // Empty space of 120 units height after the last component
      />
      </View>
      </View>
    </AdminScreenLayout>
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
    borderTopRightRadius: 40
  },
});

export default AdminHome;
