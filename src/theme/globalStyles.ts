import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    background-color: #fff;
    background-size: contain;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  .App {
    width: 487px;
    margin: auto;
    background: #fff;
    padding: 8px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;