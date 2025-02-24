'use client';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { GlobalStyle } from '@/styles/global';
import { theme } from '@/styles/theme';
import { ThemeProvider } from 'styled-components';
import { PageContent } from '../components/Header/Header.styles';
import { CartProvider } from '../contexts/CartContext';
import { ProductProvider } from '../contexts/ProductContext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <CartProvider>
            <ProductProvider>
              <Header />
              <PageContent>
                <main>{children}</main>
              </PageContent>
              <Footer year={currentYear} />
            </ProductProvider>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
