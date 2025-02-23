import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0 40px 0;
  gap: 5px;
`;

export const Button = styled.button`
  margin: 0 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const PageButton = styled.button<{ $isActive: boolean }>`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: ${({ $isActive }) => ($isActive ? '#0070f3' : '#fff')};
  color: ${({ $isActive }) => ($isActive ? '#fff' : '#333')};
  cursor: pointer;
  font-weight: ${({ $isActive }) => ($isActive ? 'bold' : 'normal')};
  transition: background-color 0.3s;
`;
