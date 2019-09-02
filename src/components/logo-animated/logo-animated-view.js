import React from 'react'
import styled from 'styled-components'

const Svg = styled.svg`
  .cls-1{
    font-size:51.58px;
    fill:#b59545;
    font-family:BemboStd, Bembo Std;
  }

  .cls-2{
    letter-spacing:-0.04em;
  }

  .cls-3{
    letter-spacing:-0.01em;
  }

  .cls-4{
    letter-spacing:-0.17em;
  }

  .cls-5{
    fill:none;
    stroke-linecap: round;
    stroke-linejoin:round;
    stroke-width:3.82px;
    stroke:url(#Gradiente_sem_nome_18);
  }

  .pen-drawable {
    stroke-dasharray: 1500;
    stroke-dashoffset: 1500;
    animation: dash 2.5s ${props => props.theme.easingFunction} forwards;
    animation-delay: 1s;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
`

export default () => (
  <Svg id="Camada_1" data-name="Camada 1" xmlns="http://www.w3.org/1999/xlink" width="200" viewBox="0 0 354.77 349.07">
    <defs>
      <linearGradient id="Gradiente_sem_nome_18" y1="139.86" x2="354.77" y2="139.86" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fdc800"/><stop offset="0.26" stopColor="#c0992b"/><stop offset="0.29" stopColor="#cf962e"/><stop offset="0.34" stopColor="#e29231"/><stop offset="0.4" stopColor="#ed9033"/><stop offset="0.46" stopColor="#f18f34"/><stop offset="0.68" stopColor="#e95f32"/><stop offset="1" stopColor="#200"/></linearGradient>
    </defs>
    <title>SVG_LOGO</title>
    <text className="cls-1" transform="translate(1.91 337.05)">
      PRAÇA<tspan className="cls-4" x="175.27" y="0"> </tspan><tspan x="180.58" y="0">VELHA</tspan>
    </text>
    <polyline className="cls-5 pen-drawable" points="1.91 277.82 82.68 277.82 82.68 199.97 112.01 178.22 131.91 178.22 131.91 277.82 112.01 277.82 112.01 83.19 171.98 83.19 171.98 156.47 153.66 156.47 153.66 1.91 232.65 1.91 232.65 182.8 258.11 182.8 258.11 277.82 239.52 277.82 239.52 211.42 258.11 211.42 282.01 235.33 282.01 277.82 352.86 277.82"/>
  </Svg>
)
