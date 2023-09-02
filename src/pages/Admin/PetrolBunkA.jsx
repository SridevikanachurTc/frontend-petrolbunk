import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import AdminScreenLayout from '../../layouts/AdminScreenLayout';
import AddBranchCard from '../../components/AdminComponents/AddBranchCard';
import PetrolBunkModal from '../../components/PetrolBunkModel';
import BranchApi from '../../services/BranchApi';
import { useIsFocused } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const PetrolBunkA = ({ navigation }) => {
  const [branches, setBranches] = useState([]);
  const [selectedData, setSelectedData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBranches, setFilteredBranches] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const fetchedBranches = await BranchApi.getBranches();
        setBranches(fetchedBranches);
        setFilteredBranches(fetchedBranches);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch branch details", error);
        setLoading(false);
      }
    };
  
    if (isFocused) {
      fetchBranches();
    }
  }, [isFocused]);

  const filterBranches = () => {
    const filtered = branches.filter((branch) => {
      const nameMatch = branch.name.toLowerCase().includes(searchQuery.toLowerCase());
      const locationMatch = branch.location.toLowerCase().includes(searchQuery.toLowerCase());
      return nameMatch || locationMatch;
    });
    setFilteredBranches(filtered);
  };

  useEffect(() => {
    filterBranches();
  }, [searchQuery]);

  if (loading) {
    return (
      <AdminScreenLayout navigation={navigation}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Loading branches...</Text>
        </View>
      </AdminScreenLayout>
    );
  }

  const handleCardPress = (data) => {
    setSelectedData(data);
  };

  return (
    <AdminScreenLayout navigation={navigation}>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <Text style={styles.headerHeading}>BRANCH DETAILS</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' , alignItems: 'center'}}>
            <Icon name="search" size={15} color="#fff" style={{ alignItems: 'center', justifyContent: 'center', padding: 3 }} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search Branch"
              onChangeText={(text) => setSearchQuery(text)}
            value={searchQuery}
              placeholderTextColor={'#fff'}
            />
          </View>
        </View>
        <View style={styles.container}>
          <FlatList
            data={filteredBranches}
            renderItem={({ item }) => (
              <AddBranchCard 
                name={item.name} 
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
              data={selectedData}
            />
          )}
        </View>
      </View>
    </AdminScreenLayout>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#001F3F',
  },
  header: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerHeading: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 3,
    alignItems: 'center',
  },
  searchInput: {
    color: '#fff',
    padding: 0,
    margin: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    fontSize: 16,
  },
  container: {
    backgroundColor: 'rgb(238, 242, 251)',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 13,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 3,
    height: '100%',
  },
});

export default PetrolBunkA;
