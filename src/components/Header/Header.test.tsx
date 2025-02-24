import { CartProvider } from '@/contexts/CartContext';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('should render the logo with correct text', () => {
    render(
      <CartProvider>
        <Header />
      </CartProvider>,
    );

    // Verifica se o texto "Fake Store" está presente
    expect(screen.getByText('Fake Store')).toBeInTheDocument();
  });
});
