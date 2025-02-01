import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:focus{
  outline: transparent;
}

body{
  background-color: ${(props) => props.theme.background};
  -webkit-font-smoothing: antialiased;
}

body, input, text-area, button{
  font-family: Roboto, sans-serif;
  font-weight: 400;
}
`
