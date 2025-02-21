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
    <Card
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onClick={() => router.push(`/products/${product.id}`)}
    >
      <Image src={product.image} alt={product.title} />
      <Title>{product.title}</Title>
      <Price>${product.price.toFixed(2)}</Price>
    </Card>
  );
}
