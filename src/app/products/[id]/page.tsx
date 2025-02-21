'use client';

import Spinner from '@/components/Spinner/Spinner';
import { Product, ProductService } from '@/services/products';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  BackButton,
  Category,
  Container,
  Description,
  ImageWrapper,
  Info,
  Price,
  Title,
} from './ProductDetails.styles';

export default function ProductDetailsPage() {
  const params = useParams();
  const id = params.id as string;
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const fetchedProduct = await ProductService.getById(Number(id));
        setProduct(fetchedProduct);
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
    fetchProduct();
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
