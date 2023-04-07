import axios from 'axios';
import commonService from './commonService';

// TODO: axios요청헤더 수정필요
const api = axios.create({
  baseURL: 'http://15.164.171.145:8000',
  timeout: 60000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  },
});

export default api;
export { commonService };
