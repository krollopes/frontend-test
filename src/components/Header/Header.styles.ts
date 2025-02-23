import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #333;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

  & > a {
    text-decoration: none;
  }
`;

export const CartIconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: not-allowed;
`;

export const CartCount = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  height: 20px;
`;

export const PageContent = styled.div`
  margin-top: 80px;
`;

export const FakeStoreText = styled.span`
  color: white;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
`;
