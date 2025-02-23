'use client';

import { Product, ProductService } from '@/services/products';
import { createContext, useContext, useEffect, useState } from 'react';

interface ProductContextData {
  products: Product[];
  isLoading: boolean;
  currentPage: number;
  totalPages: number;
  setPage: (page: number) => void;
}

const ProductContext = createContext<ProductContextData | undefined>(undefined);

export function ProductProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await ProductService.getAll(currentPage);
        setProducts(data);
        setTotalPages(10);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, [currentPage]);

  const setPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <ProductContext.Provider value={{ products, isLoading, currentPage, totalPages, setPage }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProductContext() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
}
