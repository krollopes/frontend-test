import Link from 'next/link';
import styled from 'styled-components';

export const BackButton = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 15px;
  background: #0070f3;
  color: white;
  border-radius: 5px;
  text-decoration: none;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Info = styled.div`
  flex: 2;
`;

export const Title = styled.h1`
  font-size: 24px;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

export const Price = styled.p`
  font-weight: bold;
  color: #0070f3;
  font-size: 20px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const Description = styled.p`
  margin-top: 10px;
  font-size: 16px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const Category = styled.span`
  font-size: 14px;
  color: gray;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;
