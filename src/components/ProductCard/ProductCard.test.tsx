import { render, screen, fireEvent } from '@testing-library/react';
import { ProductCard } from './ProductCard';
import { useRouter } from 'next/navigation';
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
    render(<ProductCard product={mockProduct} />);

    // Verifica se a imagem é renderizada com o alt correto
    expect(screen.getByAltText(mockProduct.title)).toBeInTheDocument();

    // Verifica se o título é renderizado corretamente
    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();

    // Verifica se o preço é renderizado corretamente
    expect(screen.getByText('$99.99')).toBeInTheDocument();
  });

  it('navega para a página de detalhes do produto ao clicar', () => {
    const push = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push });

    render(<ProductCard product={mockProduct} />);

    // Verifica se o Card pode ser clicado
    const cardElement = screen.getByRole('button');
    fireEvent.click(cardElement);

    // Verifica se a navegação foi chamada com o ID do produto
    expect(push).toHaveBeenCalledWith(`/products/${mockProduct.id}`);
  });
});
