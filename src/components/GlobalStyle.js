import { createGlobalStyle } from 'styled-components'
import 'modern-normalize'


export const GlobalStyle = createGlobalStyle`
  body {
    /* color: ${props => (props.whiteColor ? 'white' : 'black')}; */
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #d6e9e9;
    
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;
// export const GlobalStyle = createGlobalStyle`
// body {
//     margin: 0;
//     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
//       'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
//       sans-serif;
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
//   }
  
//   code {
//     font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
//       monospace;
//   }
// `


