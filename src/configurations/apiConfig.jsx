import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://07c6-103-93-20-138.ngrok-free.app',
  // Add any default headers if needed
  // headers: {
  //   'Authorization': 'Bearer YOUR_TOKEN'
  // }
});

export default instance;
