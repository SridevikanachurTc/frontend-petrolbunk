import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import PetrolLevelIndicator from '../PetrolLevelIndicator';
import FuelInventoryApi from '../../services/FuelInventoryApi';


const CARD_WIDTH = Dimensions.get('window').width / 1.05;

function ManagerTotalEmployeesCard() {
  
  const [level, setLevel] = useState(0);
  const [fuelLevel, setFuelLevel] = useState(0);
  const [maxCapacity, setMaxCapacity] = useState(0);

  useEffect(() => {
    const fetchFuelInventory = async () => {
      try {
        const data = await FuelInventoryApi.getFuelInventory();
        setLevel(data.fuelInventory.percentage);
        setFuelLevel(data.fuelInventory.inventoryLevel);
        setMaxCapacity(data.fuelInventory.inventoryCapacity);
      } catch (error) {
        console.error("Error fetching fuel inventory data:", error);
      }
    };

    fetchFuelInventory();
  }, []);

  return (
    <View style={styles.card}>
      <PetrolLevelIndicator 
        level={level} 
        fuelLevel={fuelLevel} 
        maxCapacity={maxCapacity} 
      />
      <Text style={styles.salesText}>Inventory Level</Text>
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
  salesText: {
    fontSize: 16,
    color: '#001F3F',
  }
});

export default ManagerTotalEmployeesCard;
