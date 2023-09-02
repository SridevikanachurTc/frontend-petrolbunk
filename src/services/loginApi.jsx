import { CommonActions } from '@react-navigation/native';
import instance from '../configurations/apiConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

const login = async (username, password) => {
  try {
    console.log(password);
    const response = await instance.post('/users/login', {
      username,
      password,
    });
    console.log('testiiioo', response.data);

    if (response.data && response.data.accessToken) {
      instance.defaults.headers[
        'Authorization'
      ] = `Bearer ${response.data.accessToken}`;

      const userDetails = await fetchUserDetails();
      return {token: response.data.accessToken, user: userDetails};
    } else {
      console.log('test', response.data);
      throw new Error(response.data.message || 'Invalid credentials');
    }
  } catch (error) {
    throw error;
  }
};

const fetchUserDetails = async () => {
  try {
    const response = await instance.get('/users/me');
    return response.data;
  } catch (error) {
    throw error;
  }
};

const resetPassword = async (email) => {
  try {
    console.log('from resetpassword');
    console.log(email);
    const response = await instance.post(`/users/reset-password?email=${email}`);
    console.log(response.data);
    // return response.data;
  } catch (error) {
    throw error;
  }
};

const logout = async (navigation) => {
  try {
    // Clear authentication token from Axios default headers
    delete instance.defaults.headers['Authorization'];

    // If there's a specific API endpoint for logout on your backend, call it here:
    // await instance.post('/logout');

    // Finally, clear the local storage
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('userData');
    await AsyncStorage.removeItem('userRole');
    await AsyncStorage.removeItem('bunkId');

    const resetAction = CommonActions.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
    navigation.dispatch(resetAction);

  } catch (error) {
    console.error('Failed to log out:', error);
  }
};

export const loginApi = {
  login,
  logout,
  resetPassword,
};

export default loginApi;
