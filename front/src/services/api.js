import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5173/1169',
});

export default api;