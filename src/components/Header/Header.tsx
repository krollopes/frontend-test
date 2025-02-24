import { useCartContext } from '@/contexts/CartContext';
import Link from 'next/link';
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { CartCount, CartIconContainer, FakeStoreText, HeaderWrapper } from './Header.styles';

const Header: React.FC = () => {
  const { cartItems } = useCartContext();

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <HeaderWrapper>
      <Link href="/" passHref>
        <FakeStoreText>Fake Store</FakeStoreText>
      </Link>
      <CartIconContainer>
        <FaShoppingCart size={24} color="white" />
        {cartItemCount > 0 && <CartCount>{cartItemCount}</CartCount>}
      </CartIconContainer>
    </HeaderWrapper>
  );
};

export default Header;
