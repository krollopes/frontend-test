'use client';

import { Product } from '@/services/products';
import { useRouter } from 'next/navigation';
import { Card, Image, Price, Title } from './ProductCard.styles';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();

  return (
    <Card onClick={() => router.push(`/products/${product.id}`)}>
      <Image src={product.image} alt={product.title} />
      <Title>{product.title}</Title>
      <Price>${product.price.toFixed(2)}</Price>
    </Card>
  );
}
