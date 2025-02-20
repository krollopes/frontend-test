'use client';

import { Container, Input, Select } from './SearchAndFilter.styles';

interface Props {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
}

export default function SearchAndFilter({
  searchTerm,
  setSearchTerm,
  categories,
  selectedCategory,
  setSelectedCategory,
}: Props) {
  return (
    <Container>
      <Input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </Select>
    </Container>
  );
}
