import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';

import { Product } from '@/services/products';
import { ProductProvider, useProductContext } from '../contexts/ProductContext';
import { ProductService } from '@/services/products';

jest.spyOn(console, 'error').mockImplementation(() => {});

// Mock do ProductService para simular a resposta da API
jest.mock('@/services/products', () => ({
  ProductService: {
    getAll: jest.fn(),
  },
}));

const MockComponent = () => {
  const { products, isLoading } = useProductContext();
  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <div>{products.length} products loaded</div>
      <ul>
        {products.map((product: Product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

describe('ProductContext', () => {
  it('should load products and display them', async () => {
    // Mocking the ProductService to return a fake product list
    const fakeProducts = [
      { id: 1, title: 'Product 1', price: 10 },
      { id: 2, title: 'Product 2', price: 20 },
    ];
    (ProductService.getAll as jest.Mock).mockResolvedValue(fakeProducts);

    render(
      <ProductProvider>
        <MockComponent />
      </ProductProvider>,
    );

    // Verificar se o estado de "loading" é exibido inicialmente
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    // Esperar até que os produtos sejam carregados
    await waitFor(() => expect(screen.getByText('2 products loaded')).toBeInTheDocument());

    // Verificar se os produtos aparecem na tela
    fakeProducts.forEach((product) => {
      expect(screen.getByText(product.title)).toBeInTheDocument();
    });
  });

  it('should handle errors gracefully', async () => {
    // Mocking o ProductService para simular erro na requisição
    (ProductService.getAll as jest.Mock).mockRejectedValue(new Error('Failed to fetch products'));

    render(
      <ProductProvider>
        <MockComponent />
      </ProductProvider>,
    );

    // Verificar se o estado de "loading" é exibido inicialmente
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    // Esperar até que o "loading" desapareça
    await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument());

    // A lógica de erro pode ser testada dependendo de como você lida com falhas
    // Exemplo de verificar uma mensagem de erro (se for implementado)
    expect(screen.queryByText('Error fetching products')).not.toBeInTheDocument();
  });
});
