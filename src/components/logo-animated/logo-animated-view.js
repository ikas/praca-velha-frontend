import React from 'react'
import styled from 'styled-components'

const Svg = styled.svg`
  .cls-1{
    font-size: 511.32px;
    fill:#daa621;
    font-family:BemboStd, Bembo Std;
    transition: opacity 0.3s ${props => props.theme.easingFunction};

    &.visible {
      opacity: 1;
    }

    &.hidden {
      opacity: 0;
    }
  }

  .cls-5{
    fill: none;
    stroke: #daa621;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 65.05px;
  }

  .pen-drawable {
    stroke-dasharray: 14600;
    stroke-dashoffset: 14600;
    animation: dash 2s ease-in-out forwards;
    animation-delay: 0.5s;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
`

export default ({ visible }) => (
  <Svg id="Camada_1" data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" width="180" viewBox="0 0 3544.04 3473.85">
    <text className={`cls-1 ${visible ? 'visible' : 'hidden'}`} transform="translate(32.5 3354.71)">PRAÇA VELHA</text>
    <polyline className="cls-5 pen-drawable" points="32.52 2767.61 833.17 2767.61 833.17 1995.88 1123.94 1780.26 1321.17 1780.26 1321.17 2767.61 1123.94 2767.61 1123.94 838.3 1718.39 838.3 1718.39 1564.63 1536.8 1564.63 1536.8 32.52 2319.88 32.52 2319.88 1825.65 2572.18 1825.65 2572.18 2767.61 2387.97 2767.61 2387.97 2109.37 2572.18 2109.37 2809.19 2346.39 2809.19 2767.61 3511.51 2767.61"/>
  </Svg>
)
