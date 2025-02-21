'use client';

import { Container, Input, Label, Select } from './SearchAndFilter.styles';

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
      <div>
        <Label htmlFor="search">Search:</Label>
        <Input
          id="search"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search products..."
        />
      </div>
      <div>
        <Label htmlFor="category">Category:</Label>
        <Select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Select>
      </div>
    </Container>
  );
}
