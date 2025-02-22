import { render, screen, fireEvent } from '@testing-library/react';
import SearchAndFilter from './SearchAndFilter';
import '@testing-library/jest-dom';

describe('SearchAndFilter', () => {
  const mockSetSearchTerm = jest.fn();
  const mockSetSelectedCategory = jest.fn();
  const categories = ['Electronics', 'Books', 'Clothing'];

  it('deve renderizar corretamente os campos de pesquisa e categoria', () => {
    render(
      <SearchAndFilter
        searchTerm=""
        setSearchTerm={mockSetSearchTerm}
        categories={categories}
        selectedCategory=""
        setSelectedCategory={mockSetSelectedCategory}
      />,
    );

    // Verifica se o campo de pesquisa está renderizado
    expect(screen.getByLabelText(/Search:/i)).toBeInTheDocument();

    // Verifica se o campo de seleção de categoria está renderizado
    expect(screen.getByLabelText(/Category:/i)).toBeInTheDocument();

    // Verifica as opções do select
    categories.forEach((category) => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });
  });

  it('deve chamar setSearchTerm ao digitar no campo de pesquisa', () => {
    render(
      <SearchAndFilter
        searchTerm=""
        setSearchTerm={mockSetSearchTerm}
        categories={categories}
        selectedCategory=""
        setSelectedCategory={mockSetSelectedCategory}
      />,
    );

    const searchInput = screen.getByPlaceholderText(/Search products.../i);

    // Simula a digitação no campo de busca
    fireEvent.change(searchInput, { target: { value: 'new product' } });

    // Verifica se a função setSearchTerm foi chamada com o valor correto
    expect(mockSetSearchTerm).toHaveBeenCalledWith('new product');
  });

  it('deve chamar setSelectedCategory ao selecionar uma categoria', () => {
    render(
      <SearchAndFilter
        searchTerm=""
        setSearchTerm={mockSetSearchTerm}
        categories={categories}
        selectedCategory=""
        setSelectedCategory={mockSetSelectedCategory}
      />,
    );

    const categorySelect = screen.getByLabelText(/Category:/i);

    // Simula a seleção de uma categoria
    fireEvent.change(categorySelect, { target: { value: 'Electronics' } });

    // Verifica se a função setSelectedCategory foi chamada com o valor correto
    expect(mockSetSelectedCategory).toHaveBeenCalledWith('Electronics');
  });
});
