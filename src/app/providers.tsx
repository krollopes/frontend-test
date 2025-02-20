import { ProductProvider } from '@/contexts/ProductContext';
import { GlobalStyle } from '@/styles/global';
import { theme } from '@/styles/theme';
import { ThemeProvider } from 'styled-components';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ProductProvider>{children}</ProductProvider>
    </ThemeProvider>
  );
}
