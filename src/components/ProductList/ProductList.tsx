'use client';

import { ProductCard } from '@/components/ProductCard/ProductCard';
import { Product } from '@/services/products';
import { memo } from 'react';
import { Grid } from './ProductList.styles';

interface Props {
  products: Product[];
}

function ProductList({ products }: Props) {
  return (
    <Grid>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Grid>
  );
}

export default memo(ProductList);
