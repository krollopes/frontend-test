import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Input = styled.input`
  flex: 2;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #0070f3;
    outline: none;
  }
`;

export const Select = styled.select`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #0070f3;
    outline: none;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 10px;
  }
`;
