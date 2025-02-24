import { useProductContext } from '@/contexts/ProductContext';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ProductList from './ProductList';

jest.mock('@/contexts/ProductContext', () => ({
  useProductContext: jest.fn(),
}));

const mockProducts = [
  {
    id: 1,
    title: 'Produto 1',
    price: 99.99,
    description: 'Descrição 1',
    category: 'Categoria 1',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'Produto 2',
    price: 199.99,
    description: 'Descrição 2',
    category: 'Categoria 2',
    image: 'https://via.placeholder.com/150',
  },
];

describe('ProductList', () => {
  beforeEach(() => {
    (useProductContext as jest.Mock).mockReturnValue({ isLoading: false, products: mockProducts });
  });

  it('deve mostrar "Loading..." quando isLoading for true', () => {
    (useProductContext as jest.Mock).mockReturnValue({ isLoading: true, products: [] });

    render(<ProductList products={[]} />);

    // Verifica se "Loading..." é exibido quando o carregamento está em andamento
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
