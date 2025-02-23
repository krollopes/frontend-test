import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  #__next {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  main {
    flex-grow: 1;
  }
`;
