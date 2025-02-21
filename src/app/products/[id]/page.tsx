'use client';

import { Product, ProductService } from '@/services/products';
import {
  BackButton,
  Category,
  Container,
  Description,
  ImageWrapper,
  Info,
  Price,
  Title,
} from '@/styles/ProductDetails.styles';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ProductDetailsPage() {
  const params = useParams();
  const id = params.id as string;
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      const fetchedProduct = await ProductService.getById(Number(id));
      setProduct(fetchedProduct);
    }
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <ImageWrapper>
        <Image src={product.image} alt={product.title} width={300} height={300} />
      </ImageWrapper>
      <Info>
        <Title>{product.title}</Title>
        <Price>${product.price.toFixed(2)}</Price>
        <Description>{product.description}</Description>
        <Category>Category: {product.category}</Category>
        <BackButton href="/">← Back to Home</BackButton>
      </Info>
    </Container>
  );
}
