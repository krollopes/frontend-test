import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';
import { CartProvider } from '@/contexts/CartContext';
import '@testing-library/jest-dom';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

const mockProduct = {
  id: 1,
  title: 'Produto de Teste',
  image: 'https://via.placeholder.com/150',
  price: 99.99,
  description: 'Descrição do Produto de Teste',
  category: 'Categoria de Teste',
};

describe('ProductCard', () => {
  it('renderiza corretamente com as props fornecidas', () => {
    render(
      <CartProvider>
        {' '}
        <ProductCard product={mockProduct} />
      </CartProvider>,
    );

    // Verifica se a imagem é renderizada com o alt correto
    expect(screen.getByAltText(mockProduct.title)).toBeInTheDocument();

    // Verifica se o título é renderizado corretamente
    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();

    // Verifica se o preço é renderizado corretamente
    expect(screen.getByText('$99.99')).toBeInTheDocument();
  });
});
