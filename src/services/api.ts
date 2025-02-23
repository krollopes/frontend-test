import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://fakestoreapi.com/',
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Request failed:', error);
    if (error.response) {
      alert(`Error: ${error.response.data.message || error.message}`);
    } else if (error.request) {
      alert('Error: No response from the server');
    } else {
      alert('Error: Something went wrong');
    }
    return Promise.reject(error);
  },
);
