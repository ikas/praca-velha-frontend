import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Work+Sans:300,400,600,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Mukta&display=swap');

  html, body {
    height: 100%;
    margin: 0;
  }

  body {
    font-family: 'Work Sans', sans-serif;
    background: #fff;
    color: #000;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeSpeed;
    word-wrap: break-word;
    overflow-x: hidden;
    overflow-y: scroll;
  }
`