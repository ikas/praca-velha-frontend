import React from 'react'
import styled from 'styled-components'

import LogoAnimated from '../logo-animated'

const Image = styled.div`
  width: 100%;
  height: 100vh;
  background: url('/landing-bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-position-y: top;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4rem;
`

export default ({ children, ...props  }) => (
  <Image {...props}>
    <LogoAnimated />
    {children}
  </Image>
)
