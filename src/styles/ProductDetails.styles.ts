import styled from 'styled-components';

import Link from 'next/link';

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
  gap: 20px;
  padding: 20px;
`;

export const ImageWrapper = styled.div`
  flex: 1;
`;

export const Info = styled.div`
  flex: 2;
`;

export const Title = styled.h1`
  font-size: 24px;
`;

export const Price = styled.p`
  font-weight: bold;
  color: #0070f3;
`;

export const Description = styled.p`
  margin-top: 10px;
`;

export const Category = styled.span`
  font-size: 14px;
  color: gray;
`;
