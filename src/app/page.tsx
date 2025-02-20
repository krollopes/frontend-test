'use client';

import { ProductCard } from '@/components/ProductCard/ProductCard';
import { useProductContext } from '@/contexts/ProductContext';
import { Container, Loading } from '@/styles/Home.styles';

export default function Home() {
  const { products, isLoading } = useProductContext();

  if (isLoading) return <Loading>Loading...</Loading>;

  return (
    <Container>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Container>
  );
}
