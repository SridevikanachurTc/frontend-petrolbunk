import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://fe7a-49-205-142-209.ngrok-free.app',
  // Add any default headers if needed
  // headers: {
  //   'Authorization': 'Bearer YOUR_TOKEN'
  // }
});

export default instance;
