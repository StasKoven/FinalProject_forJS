import axios from 'axios';

const HttpClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/', // Змінив API на jsonplaceholder
  timeout: 5000, // Тайм-аут запиту
});

// Інтерсептор для обробки запитів
HttpClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Інтерсептор для обробки відповідей
HttpClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('authToken'); // Видалити токен, якщо він недійсний
      window.location.href = '/login'; // Перенаправлення на сторінку логіну
    }
    console.error('HTTP Error:', error);
    return Promise.reject(error);
  }
);

export default HttpClient;
