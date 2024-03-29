import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

:focus{
    outline:0;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body::-webkit-scrollbar {
    height: 9px;
    width: 12px;
}

body::-webkit-scrollbar-track {
  border-radius: 3px;
  background-color: #DFE9EB;
  border: 1px solid #FFFFFF;
}

body::-webkit-scrollbar-track:hover {
  background-color: #B8C0C2;
}

body::-webkit-scrollbar-track:active {
  background-color: #B8C0C2;
}

body::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #646B68;
}

body::-webkit-scrollbar-thumb:hover {
  background-color: #717175;
}

body::-webkit-scrollbar-thumb:active {
  background-color: #6D7571;
}

  body, input, textarea, button {
    font: 1rem 'Space Grotesk', 'monospoco';
  }

  h1, h2 {
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 2.5rem;
    }
    p,
    span {
        font-weight: 400;
        font-size: 1.125rem;
        font-family: 'Space Grotesk', 'monospoco';
    }
`;
