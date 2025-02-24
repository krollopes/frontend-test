import { render, screen } from '@testing-library/react';
import { CartProvider, useCartContext } from './CartContext';
import { act, renderHook } from '@testing-library/react';

// Componente de teste para consumir o contexto
const TestComponent = () => {
  const { cartItems, addToCart, removeFromCart } = useCartContext();

  return (
    <div>
      <span data-testid="cart-length">{cartItems.length}</span>
      <button onClick={() => addToCart({ id: 1, title: 'Produto 1', price: 100, quantity: 1 })}>
        Adicionar
      </button>
      <button onClick={() => removeFromCart(1)}>Remover</button>
    </div>
  );
};

describe('CartContext', () => {
  it('deve permitir o uso do contexto dentro do CartProvider', () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>,
    );

    expect(screen.getByTestId('cart-length').textContent).toBe('0');
  });

  it('deve adicionar um item ao carrinho', () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>,
    );

    const addButton = screen.getByText('Adicionar');

    act(() => {
      addButton.click();
    });

    expect(screen.getByTestId('cart-length').textContent).toBe('1');
  });

  it('deve remover um item do carrinho', () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>,
    );

    const addButton = screen.getByText('Adicionar');
    const removeButton = screen.getByText('Remover');

    act(() => {
      addButton.click();
    });

    expect(screen.getByTestId('cart-length').textContent).toBe('1');

    act(() => {
      removeButton.click();
    });

    expect(screen.getByTestId('cart-length').textContent).toBe('0');
  });

  it('deve lançar um erro ao usar useCartContext fora do CartProvider', () => {
    try {
      renderHook(() => useCartContext());
    } catch (error) {
      expect(error).toEqual(new Error('useCartContext must be used within a CartProvider'));
    }
  });

});
