import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api', // ajuste conforme a porta do seu backend
});

export default api;