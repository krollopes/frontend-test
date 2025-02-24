import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from './Pagination';

describe('Pagination', () => {
  it('deve destacar o botão da página ativa', () => {
    render(<Pagination currentPage={3} totalPages={5} onPageChange={() => {}} />);

    // Verifica se o botão da página 3 tem uma classe ativa ou algum estilo visual
    const activeButton = screen.getByText('3');
    expect(activeButton).toHaveStyle('font-weight: bold');
  });

  it('não deve chamar onPageChange ao clicar na página ativa', () => {
    const mockOnPageChange = jest.fn();
    render(<Pagination currentPage={3} totalPages={5} onPageChange={mockOnPageChange} />);

    // Clica no botão da página ativa
    fireEvent.click(screen.getByText('3'));

    // Verifica se a função onPageChange não foi chamada
    expect(mockOnPageChange).not.toHaveBeenCalled();
  });
});
