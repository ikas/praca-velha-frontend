import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,600,700&display=swap');

  html, body {
    height: 100%;
    margin: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.primary};
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeSpeed;
    word-wrap: break-word;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  body a {
    text-decoration: none;
  }

  ul {
    list-style-type: square;
  }
`