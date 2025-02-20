import { api } from './api';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export const ProductService = {
  async getAll(): Promise<Product[]> {
    const response = await api.get<Product[]>('/products');
    return response.data;
  },

  async getById(id: number): Promise<Product> {
    const response = await api.get<Product>(`/products/${id}`);
    return response.data;
  },
};
