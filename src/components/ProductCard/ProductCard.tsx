import React from 'react';
import { useCartContext } from '@/contexts/CartContext';
import type { Product } from '@/types/Product';
import Link from 'next/link';
import {
  Card,
  ProductLink,
  Image,
  Title,
  Price,
  Description,
  AddToCartButton,
} from './ProductCard.styles';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCartContext();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1,
    });
  };

  return (
    <Card>
      <Link href={`/products/${product.id}`} passHref>
        <ProductLink>
          <Image src={product.image} alt={product.title} />
        </ProductLink>
        <Title>{product.title}</Title>
        <Description>{product.description}</Description>
        <Price>${product.price}</Price>
      </Link>
      <AddToCartButton onClick={handleAddToCart}>Adicionar ao Carrinho</AddToCartButton>
    </Card>
  );
};

export default ProductCard;
