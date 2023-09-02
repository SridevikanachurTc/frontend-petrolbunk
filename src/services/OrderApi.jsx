import instance from '../configurations/apiConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

const createOrder = async (bunkId, orderData) => {
  try {
    const response = await instance.post(`/bunks/${bunkId}/createOrder`, orderData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getOrders = async () => {
  try {
    const bunkId = await AsyncStorage.getItem('bunkId');
    const response = await instance.get(`/bunks/${bunkId}/orders`);
    return response.data;
  } catch (error) {
    throw error;
  }
};


const deleteOrder = async (orderId) => {
  try {
    const bunkId = await AsyncStorage.getItem('bunkId');
    console.log("orderId for delete order",orderId);
    console.log("bunkId for delete order",bunkId);
    const response = await instance.delete(`/bunks/${bunkId}/deleteOrder/${orderId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const updateOrder = async (orderId, orderData) => {
  try {
    const bunkId = await AsyncStorage.getItem('bunkId');
    const response = await instance.patch(`/bunks/${bunkId}/updateOrder/${orderId}`, orderData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const OrderApi = {
  createOrder,
  getOrders,
  updateOrder,
  deleteOrder
};

export default OrderApi;
