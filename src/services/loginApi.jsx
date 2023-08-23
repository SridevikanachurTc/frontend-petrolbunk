import instance from '../configurations/apiConfig';

const login = async (username, password) => {
  try {
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

// export const logout = async () => {
//   // TODO: Add logout logic here
//   // You may want to remove the token from the apiConfig defaults,
//   // clear local storage, and perform any other necessary cleanup.
// };

export const loginApi = {
  login,
  //   logout
};

export default loginApi;
