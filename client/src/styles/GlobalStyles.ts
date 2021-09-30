import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
    
  }
  :root {
    --primary: #000;
    --secondary: #000;
    --tertiary: #FF9900;
    --search: #202327;
    --white: #D9D9D9;
    --gray: #7A7A7A;
    --outline: #2F3336;
    --like: #E8265E;
    --dev: #33A1F2;
    --dev-dark-hover: #011017;
    --dev-light-hover: #2C8ED6;
  }
`;