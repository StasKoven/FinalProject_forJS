import HttpClient from './HttpClient';

export const fetchProducts = async () => {
  return await HttpClient.get('/posts'); // Замінено на /posts
};

export const fetchProductById = async (id) => {
  return await HttpClient.get(`/posts/${id}`); // Замінено на /posts/:id
};

export const loginUser = async (credentials) => {
  return await HttpClient.post('/users', credentials); // Імітація логіну через POST
};

export const registerUser = async (userData) => {
  return await HttpClient.post('/users', userData); // Імітація реєстрації через POST
};

export const deleteProduct = async (id) => {
    return await HttpClient.delete(`/posts/${id}`);
  };
  
  export const createProduct = async (newData) => {
    return await HttpClient.post('/posts', newData);
  };
  
  export const updateProduct = async (id, updatedData) => {
    return await HttpClient.put(`/posts/${id}`, updatedData);
  };