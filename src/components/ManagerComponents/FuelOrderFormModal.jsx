// ModalComponent.js

import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import PetrolLevelIndicator from '../PetrolLevelIndicator';
import OrderApi from '../../services/OrderApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FuelInventoryApi from '../../services/FuelInventoryApi';


  const FuelOrderFormModal = ({
      isVisible,
      toggleModal,
      amount,
    }) => {
  const [quantity, setQuantity] = useState('');
  const [level, setLevel] = useState(0);
  const [fuelLevel, setFuelLevel] = useState(0);
  const [maxCapacity, setMaxCapacity] = useState(0);

  useEffect(() => {
    const fetchFuelData = async () => {
      try {
        const bunkData = await FuelInventoryApi.getFuelInventory();
        setLevel(bunkData.fuelInventory.percentage);
        setFuelLevel(bunkData.fuelInventory.inventoryLevel);
        setMaxCapacity(bunkData.fuelInventory.inventoryCapacity);
      } catch (error) {
        console.error('Failed to fetch fuel data:', error);
      }
    };

    fetchFuelData();
  }, []);

  const handleSubmit = async () => {
    console.log('Order quantity: ', quantity);

    const totalAmount = amount * Number(quantity);

    if (Number(fuelLevel) + Number(quantity) > Number(maxCapacity)) {
      alert('Max fuel quantity exceeds! Please enter a smaller amount.');
      return;
    }

    if (!quantity.trim()) {
      alert('Please enter order quantity.');
      return;
  }
  

    try {
      const bunkId = await AsyncStorage.getItem('bunkId');

      const orderData = {
        orderQuantity: quantity,
        orderAmount: totalAmount,
      };

      await OrderApi.createOrder(bunkId, orderData);
      console.log('Order submitted successfully!');


    } catch (error) {
      console.error('Failed to submit order:', error);
    }

    setQuantity('');
    toggleModal();
  };

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={toggleModal}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      backdropTransitionInTiming={1000}
      backdropTransitionOutTiming={500}
      style={styles.modal}>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '700',
            color: '#001F3F',
            textAlign: 'center',
          }}>
          {' '}
          Present Fuel Level{' '}
        </Text>
        <PetrolLevelIndicator
          level={level}
          fuelLevel={fuelLevel}
          maxCapacity={maxCapacity}
        />
        <Text style={styles.text}>Fuel Order Quantity</Text>
        <TextInput
          placeholder="Order Quantity"
          value={quantity}
          onChangeText={setQuantity}
          keyboardType="numeric"
          style={styles.input}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleModal} style={styles.cancelButton}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  container: {
    backgroundColor: 'white',
    height: '70%',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  text: {
    color: '#001F3F',
    textAlign: 'center',
    padding: 5,
    paddingTop: 40,
    paddingBottom: 20,
    fontWeight: 'bold',
    fontSize: 20,
  },
  input: {
    elevation: 5,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  submitButton: {
    backgroundColor: '#001F3F',
    padding: 10,
    flex: 0.45,
    alignItems: 'center',
    marginRight: 1,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  cancelButton: {
    backgroundColor: '#001F3F',
    padding: 10,
    flex: 0.45,
    alignItems: 'center',
    marginLeft: 1,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default FuelOrderFormModal;
