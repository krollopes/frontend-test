import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('should render the footer text with the correct year', () => {
    const year = 2025;
    render(<Footer year={year} />);

    // Verifica se o texto do rodapé inclui o ano correto
    expect(screen.getByText(`© ${year} FakeStore. All rights reserved.`)).toBeInTheDocument();
  });

  it('should render the footer text with default content', () => {
    const year = 2025;
    render(<Footer year={year} />);

    // Verifica se o texto está correto com uma expressão regular para englobar o "FakeStore" junto com o resto do texto
    expect(screen.getByText(/FakeStore/)).toBeInTheDocument();
    expect(screen.getByText(/All rights reserved./)).toBeInTheDocument();
  });
});
