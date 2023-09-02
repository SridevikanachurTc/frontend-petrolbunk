// FuelInventoryApi.js
import instance from '../configurations/apiConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getFuelInventory = async () => {
  try {
    const bunkId = await AsyncStorage.getItem('bunkId');
    const response = await instance.get(`/bunks/${bunkId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const raiseFuelRequest = async (staffId) => {
  try {
    const response = await instance.post(`/request/raise-request/${staffId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getFuelRequests = async (managerId) => {
  try {
    const response = await instance.get(`/request/get-requests/${managerId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const FuelInventoryApi = {
  getFuelInventory,
  raiseFuelRequest,
  getFuelRequests
};

export default FuelInventoryApi;
