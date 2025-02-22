import { render, screen } from '@testing-library/react';
import ProductList from './ProductList';

// Mock do componente ProductCard
jest.mock('@/components/ProductCard/ProductCard', () => ({
  ProductCard: jest.fn(() => <div data-testid="product-card" />),
}));

describe('ProductList', () => {
  const mockProducts = [
    {
      id: 1,
      title: 'Product 1',
      price: 20,
      image: '/path/to/image',
      description: 'Description 1',
      category: 'Category 1',
    },
    {
      id: 2,
      title: 'Product 2',
      price: 30,
      image: '/path/to/image',
      description: 'Description 2',
      category: 'Category 2',
    },
  ];

  it('should render a list of products', () => {
    render(<ProductList products={mockProducts} />);

    // Verifica se o ProductCard é chamado para cada produto
    expect(screen.getAllByTestId('product-card')).toHaveLength(mockProducts.length);
  });

  it('should not render any ProductCard if the product list is empty', () => {
    render(<ProductList products={[]} />);

    // Verifica se nenhum ProductCard é renderizado
    expect(screen.queryAllByTestId('product-card')).toHaveLength(0);
  });
});
