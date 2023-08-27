import React from 'react';
import { FlatList, View } from 'react-native';
import LineGraph from '../../graphs/LineGraph';
import RingGraph from '../../graphs/RingGraph';
import StackGraph from '../../graphs/StackGraph';
import HomeCardsCalled from '../../components/HomeCardsCalled';
import ManagerScreenLayout from '../../layouts/ManagerScreenLayout';

const ManagerHome = ({ navigation }) => {
  const renderItem = ({ item }) => {
    const Component = item.component;
    return <Component />;
  };

  const data = [
    { id: '1', component: HomeCardsCalled },
    { id: '2', component: LineGraph },
    { id: '3', component: StackGraph },
    { id: '4', component: RingGraph },
  ];

  return (
    <ManagerScreenLayout navigation={navigation}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<View style={{ height: 20 }} />}
        ListFooterComponent={<View style={{ height: 20 }} />} // Empty space of 20 units height after the last component
      />
    </ManagerScreenLayout>
  );
};

export default ManagerHome;
