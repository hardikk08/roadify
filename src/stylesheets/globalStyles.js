import { css } from '@emotion/core';

const GlobalStyles = css`
  * {
    box-sizing: border-box;
  }

  html, body {
    font-family: 'Rubik', sans-serif;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyles;