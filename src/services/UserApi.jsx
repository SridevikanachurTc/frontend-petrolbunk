import instance from '../configurations/apiConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

const fetchUserDetails = async () => {
  try {
    const response = await instance.get('/users/me');
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getAllUsers = async () => {
  try {
    const response = await instance.get('/users');
    return response.data;
  } catch (error) {
    throw error;
  }
};

const deleteManager = async (bunkId) => {
  try {
    console.log(bunkId);
    const response = await instance.put(`/bunks/${bunkId}/removeManager`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const createStaff = async (staffDetails) => {
  try {
    const response = await instance.post('/users', staffDetails);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const assignShift = async (staffId, shiftDetails) => {
  try {
    const response = await instance.patch(`/assignShift/${staffId}`, shiftDetails);
    return response.data;
  } catch (error) {
    throw error;
  }
};


const uploadProfileImage = async (imageUri, userId) => {
  
  try {
    const token = await AsyncStorage.getItem('token');
      // Define the API endpoint URL
const apiUrl = `https://07c6-103-93-20-138.ngrok-free.app/users/profile?userId=${userId}`;

// Create the Fetch request
fetch(apiUrl, {
  method: 'POST',
  headers: {
    ...token ? { 'Authorization': `Bearer ${token}` } : console.log("token not recieved"),
  },
  body: imageUri,
})
  .then(response => {
    // Check if the response status is OK (200)
  console.log("file upload response--------->")
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  // Check if the response contains JSON before trying to parse it
  const contentType = response.headers.get("content-type");
  if (contentType && contentType.indexOf("application/json") !== -1) {
    return response.json();
  } else {
    return response.text();  // Return plain text if the response is not JSON
  }
})
.then(data => {
  console.log('Response data:', data);
})
.catch(error => {
  console.error('Fetch error:', error);
});
  } catch (error) {
      console.error('Error uploading profile image:', error);
      if (error.response) {
          console.error('Response Data:', error.response.data);
          console.error('Response Status:', error.response.status);
          console.error('Response Headers:', error.response.headers);
      } else if (error.request) {
          console.error('Request made but no response received:', error.request);
      } else {
          console.error('Error setting up the request:', error.message);
      }
      console.error('Axios Configuration:', error.config);
      throw error;
  }
};

const deleteUser = async (userId) => {
  try {
    const response = await instance.delete(`/users/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};



const UserApi = {
  fetchUserDetails,
  getAllUsers,
  deleteManager,
  createStaff,
  assignShift,
  uploadProfileImage,
  deleteUser
};

export default UserApi;
