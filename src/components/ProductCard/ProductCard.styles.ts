import styled from 'styled-components';

export const Card = styled.div`
  background: #fff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
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
