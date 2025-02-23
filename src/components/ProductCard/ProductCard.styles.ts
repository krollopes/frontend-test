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
  cursor: pointer;
  transition: transform 0.2s;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
  }

  & a {
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const ProductLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
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
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 0.9rem;
  color: inherit;
  margin: 5px 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1rem;
`;

export const AddToCartButton = styled.button`
  margin-top: auto;
  padding: 8px 12px;
  border: none;
  background-color: #0070f3;
  color: white;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: #005bb5;
  }
`;
