import React from 'react'
import styled from 'styled-components'

import Logo from '../logo'

const Background = styled.div`
  width: 100%;
  background: ${props => props.theme.colors.primarySoftShade};
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: ${props => props.theme.space[4]}px;
  padding-bottom: ${props => props.theme.space[4]}px;
`

export default ({ logo  }) => (
  <Background>
    <Logo logo={logo} />
  </Background>
)
