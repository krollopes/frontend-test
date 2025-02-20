import styled from 'styled-components';

export const Card = styled.div`
  cursor: pointer;
  padding: 16px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  &:focus {
    outline: 3px solid #0070f3;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: contain;
`;

export const Title = styled.h3`
  font-size: 16px;
  margin: 8px 0;
`;

export const Price = styled.p`
  font-weight: bold;
  color: #0070f3;
`;
