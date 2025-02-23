import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { Product } from '@/services/products';
import Pagination from '../Pagination/Pagination';
import { useProductContext } from '@/contexts/ProductContext';
import { ProductGrid } from './ProductList.styles';

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const { isLoading } = useProductContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);

  useEffect(() => {
    setCurrentPage(1);
  }, [products]);

  // Calcular os produtos a serem exibidos na página atual
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <ProductGrid>
            {currentProducts.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ProductGrid>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default ProductList;
