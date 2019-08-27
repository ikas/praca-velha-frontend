import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Oswald:300,400,600,700&display=swap');

  html, body {
    height: 100%;
    margin: 0;
  }

  body {
    font-family: 'Oswald', sans-serif;
    background: #fff;
    color: #000;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeSpeed;
    word-wrap: break-word;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  body a {
    text-decoration: none;
  }
`