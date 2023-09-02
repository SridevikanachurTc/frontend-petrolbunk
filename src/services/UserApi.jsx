import instance from '../configurations/apiConfig';

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


const uploadProfileImage = async (userId, imageUri) => {
  
  try {
      console.log(`Uploading image from: ${imageUri}`);
      const response = await instance.post(`/users/profile?userId=${userId}`, imageUri);
      console.log('Successfully uploaded profile image:', response.data);
      return response.data;
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



const UserApi = {
  fetchUserDetails,
  getAllUsers,
  deleteManager,
  createStaff,
  assignShift,
  uploadProfileImage
};

export default UserApi;
