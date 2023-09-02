import React, {useState} from 'react';
import {FlatList, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import ManagerHomeCardsCalled from '../../components/ManagerComponents/ManagerHomeCardsCalled';
import ManagerScreenLayout from '../../layouts/ManagerScreenLayout';
import FuelInventoryLevelCard from '../../components/ManagerComponents/FuelInventoryLevelCard';
import ManagerLineGraph from '../../graphs/ManagerLineGraph';
import ManagerRingGraph from '../../graphs/ManagerRingGraph';
import Icon from 'react-native-vector-icons/FontAwesome';
import NotificationModal from '../../components/ManagerComponents/NotificationModal';

const ManagerHome = ({navigation}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const renderItem = ({item}) => {
    const Component = item.component;
    return <Component />;
  };

  const data = [
    {id: '1', component: FuelInventoryLevelCard},
    {id: '2', component: ManagerHomeCardsCalled},
    {id: '3', component: ManagerLineGraph},
    {id: '4', component: ManagerRingGraph},
  ];

  return (
    <ManagerScreenLayout navigation={navigation}>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <Text style={styles.headerHeading}>DASHBOARD</Text>
          <TouchableOpacity onPress={() => setIsModalVisible(true)}>
            <Icon name="bell" size={24} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            ListHeaderComponent={<View style={{height: 10}} />}
            ListFooterComponent={<View style={{height: 120}} />} // Empty space of 100 units height after the last component
          />
          <NotificationModal
            isVisible={isModalVisible}
            onDismiss={() => setIsModalVisible(false)}
          />
        </View>
      </View>
    </ManagerScreenLayout>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#001F3F',
  },
  header: {
    // backgroundColor: '#001F3F',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    color: '#fff',
    paddingRight: 10,
    alignItems: 'center',
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
  },
});

export default ManagerHome;
