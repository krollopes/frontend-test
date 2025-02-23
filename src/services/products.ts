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
  async getAll(limit: number = 150): Promise<Product[]> {
    try {
      const response = await api.get<Product[]>('/products', {
        params: { limit },
      });
      return response.data;
    } catch (error) {
      console.error('Failed to fetch products:', error);
      throw new Error('Failed to fetch products');
    }
  },

  async getById(id: number): Promise<Product> {
    try {
      const response = await api.get<Product>(`/products/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Failed to fetch product with id ${id}:`, error);
      throw new Error('Failed to fetch product');
    }
  },
};
