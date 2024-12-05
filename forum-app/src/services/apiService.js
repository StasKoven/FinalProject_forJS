import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dummyjson.com/'
});

export const fetchProducts = async () => {
  try {
    const response = await api.get('/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export default api;