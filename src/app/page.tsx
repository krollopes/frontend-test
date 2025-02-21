'use client';

import Spinner from '@/components/Spinner/Spinner';
import { Product, ProductService } from '@/services/products';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const ProductList = dynamic(() => import('@/components/ProductList/ProductList'), {
  loading: () => <Spinner />,
});
const SearchAndFilter = dynamic(() => import('@/components/SearchAndFilter/SearchAndFilter'), {
  loading: () => <Spinner />,
});

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedProducts = await ProductService.getAll();
        setProducts(fetchedProducts);
        const uniqueCategories = [...new Set(fetchedProducts.map((product) => product.category))];
        setCategories(uniqueCategories);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === '' || product.category === selectedCategory),
  );

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <SearchAndFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ProductList products={filteredProducts} />
    </>
  );
}
