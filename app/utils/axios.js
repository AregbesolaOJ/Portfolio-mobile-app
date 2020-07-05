import Axios from 'axios';

// base url for endpoint goes in here
const API_URL = '';

const axios = Axios.create({
  baseURL: API_URL,
  withCredentials: true
});

export default axios;
