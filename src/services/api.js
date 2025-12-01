// services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL + '/api', 
  timeout: 10000,
});

// Interceptor para debugging
api.interceptors.request.use(
  (config) => {
    console.log('🔄 Realizando petición:', config.method?.toUpperCase(), config.url);
    console.log('📤 Datos enviados:', config.data);
    return config;
  },
  (error) => {
    console.error('❌ Error en petición:', error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log('✅ Respuesta recibida:', response.status, response.data);
    return response;
  },
  (error) => {
    console.error('❌ Error en respuesta:', error.response?.status, error.response?.data);
    return Promise.reject(error);
  }
);

export default api;

console.log("URL final:", import.meta.env.VITE_API_URL + "/api/auth/register");
