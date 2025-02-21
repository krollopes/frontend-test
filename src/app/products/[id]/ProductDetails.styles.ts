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
  transition: background 0.3s;
  text-align: center;

  &:hover {
    background: #005bb5;
  }

  @media (min-width: 768px) {
    width: auto;
    align-self: flex-start;
  }
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
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
`;

export const Info = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

export const Price = styled.p`
  font-weight: bold;
  color: #0070f3;
  font-size: 20px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

export const Description = styled.p`
  margin-top: 10px;
  font-size: 16px;
  line-height: 1.5;

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
