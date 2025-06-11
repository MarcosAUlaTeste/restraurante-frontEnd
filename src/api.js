import axios from 'axios';

const api = axios.create({
  baseURL: 'https://restaurante-backend-2svy.onrender.com/api/pratos', // ajuste conforme a porta do seu backend
});

export default api;
