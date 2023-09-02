import instance from '../configurations/apiConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getStaffCount = async (bunkId) => {
  try {
    const response = await instance.get(`/bunks/${bunkId}/getStaffCount`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getTotalFuelSold = async (bunkId) => {
    try {
      const response = await instance.get(`/sales/total-fuel-sold/${bunkId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const getActiveOrdersCount = async (bunkId) => {
    try {
      const response = await instance.get(`/bunks/${bunkId}/activeOrdersCount`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

const ManagerStatsApi = {
  getStaffCount,
  getTotalFuelSold,
  getActiveOrdersCount
};

export default ManagerStatsApi;
