import React from 'react'
import styled from 'styled-components'

import Copy from '../copy-text'

const FooterWrapper = styled.div`
  background: ${props => props.theme.colors.primary};
`

export default () => {
  return (
    <FooterWrapper>
      <Copy color="white" py={3} style={{ textAlign: 'center' }}>© Praça Velha, 2019</Copy>
    </FooterWrapper>
  )
}