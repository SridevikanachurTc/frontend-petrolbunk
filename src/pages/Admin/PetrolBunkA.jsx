import React, { useState } from 'react';
import {FlatList} from 'react-native';
import AdminScreenLayout from '../../layouts/AdminScreenLayout';
import AddBranchCard from '../../components/AdminComponents/AddBranchCard';
import PetrolBunkModal from '../../components/PetrolBunkModel';

const PetrolBunkA = ({navigation}) => {

  const [selectedData, setSelectedData] = useState(null);

  const dummyBranchData = [
    {
        id: '1',
        branchName: 'Central HQ',
        location: 'Downtown',
        level: '10'
    },
    {
        id: '2',
        branchName: 'North Outlet',
        location: 'Uptown',
        level: '40'
    },
    {
        id: '3',
        branchName: 'South Outlet',
        location: 'Suburbia',
        level: '80'
    },
    {
        id: '4',
        branchName: 'East Corner',
        location: 'Eastville',
        level: '20'
    },
    {
        id: '5',
        branchName: 'West Station',
        location: 'Westtown',
        level: '40'
    },
    {
        id: '6',
        branchName: 'Midtown Spot',
        location: 'Centreville',
        level: '40'
    }
];

  const handleCardPress = (data) => {
    setSelectedData(data);
  };

  return (
    <AdminScreenLayout navigation={navigation}>
         <FlatList
            data={dummyBranchData}
            renderItem={({ item }) => (
                <AddBranchCard 
                    branchName={item.branchName} 
                    locationName={item.location}
                    onPress={() => handleCardPress(item)} 
                />
            )}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
        />

{selectedData && (
            <PetrolBunkModal
                isVisible={!!selectedData}
                onDismiss={() => setSelectedData(null)}
                data ={selectedData}
            />
        )}
      </AdminScreenLayout>
  );
};

export default PetrolBunkA;
