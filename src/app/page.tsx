'use client';

import ProductList from '@/components/ProductList/ProductList';
import SearchAndFilter from '@/components/SearchAndFilter/SearchAndFilter';
import { Product, ProductService } from '@/services/products';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await ProductService.getAll();
      setProducts(data);

      const uniqueCategories = Array.from(new Set(data.map((product) => product.category)));
      setCategories(uniqueCategories);
    }
    fetchData();
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === '' || product.category === selectedCategory),
  );

  return (
    <main>
      <SearchAndFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ProductList products={filteredProducts} />
    </main>
  );
}
