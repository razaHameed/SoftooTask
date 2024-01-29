import axios from 'axios';
import {dev} from '../environment/environment';

const Api = axios.create({
  baseURL: dev.api,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default Api;
