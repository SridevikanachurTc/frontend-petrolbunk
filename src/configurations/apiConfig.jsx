import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://thin-hands-fry.loca.lt',
  // Add any default headers if needed
  // headers: {
  //   'Authorization': 'Bearer YOUR_TOKEN'
  // }
});

export default instance;
