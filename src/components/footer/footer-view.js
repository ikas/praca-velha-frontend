import React from 'react'
import styled from 'styled-components'

import Container from '../container'
import Copy from '../copy-text'

const FooterWrapper = styled.div`
  background: ${props => props.theme.colors.secondary};
`

export default () => {
  return (
    <FooterWrapper>
      <Container>
        <Copy color="primary" px={[3, 4]} py={2}>© Praça Velha, 2019</Copy>
      </Container>
    </FooterWrapper>
  )
}