import { Product, ProductService } from '@/services/products';
import {
  Category,
  Container,
  Description,
  ImageWrapper,
  Info,
  Price,
  Title,
} from '@/styles/ProductDetails.styles';
import Image from 'next/image';

interface ProductPageProps {
  params: { id: string };
}

export default async function ProductDetailsPage({ params }: ProductPageProps) {
  const product: Product = await ProductService.getById(Number(params.id));

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
      </Info>
    </Container>
  );
}
