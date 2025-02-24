import { ProductService } from '@/services/ProductService';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { useParams } from 'next/navigation';
import ProductDetailsPage from './page';

// Mock do useParams para retornar um ID de produto específico
jest.mock('next/navigation', () => ({
  useParams: jest.fn(),
}));

// Mock do ProductService para retornar um produto específico
jest.mock('@/services/ProductService', () => ({
  ProductService: {
    getById: jest.fn(),
  },
}));

const mockProduct = {
  id: 1,
  title: 'Produto de Teste',
  price: 99.99,
  description: 'Descrição do Produto de Teste',
  category: 'Categoria de Teste',
  image: 'https://via.placeholder.com/150',
};

describe('ProductDetailsPage', () => {
  beforeEach(() => {
    (useParams as jest.Mock).mockReturnValue({ id: '1' });
    (ProductService.getById as jest.Mock).mockResolvedValue(mockProduct);
  });

  it('deve renderizar os detalhes do produto corretamente', async () => {
    render(<ProductDetailsPage />);

    // Verifica se o spinner de carregamento é exibido inicialmente
    expect(screen.getByTestId('spinner-element')).toBeInTheDocument();

    // Espera até que o produto seja carregado e renderizado
    await waitFor(() => {
      expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
      expect(screen.getByText(`$${mockProduct.price.toFixed(2)}`)).toBeInTheDocument();
      expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
      expect(screen.getByText(`Category: ${mockProduct.category}`)).toBeInTheDocument();
    });
  });

  it('deve renderizar uma mensagem de erro quando ocorrer um erro', async () => {
    const errorMessage = 'Erro ao carregar produto';
    (ProductService.getById as jest.Mock).mockRejectedValue(new Error(errorMessage));

    render(<ProductDetailsPage />);

    // Espera até que a mensagem de erro seja renderizada
    await waitFor(() => {
      expect(screen.getByText(`Error: ${errorMessage}`)).toBeInTheDocument();
    });
  });
});
