import axios from 'axios';

// Создаем базовый instance для API
const api = axios.create({
  baseURL: process.env.VITE_API_URL || '/api',
  timeout: 10000,
});

// Перехватчик для обработки ошибок
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export default api; 