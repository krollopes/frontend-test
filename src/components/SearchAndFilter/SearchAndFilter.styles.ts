import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Input = styled.input`
  flex: 2;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Select = styled.select`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
