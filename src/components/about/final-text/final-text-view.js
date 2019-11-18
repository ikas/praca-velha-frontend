import React from 'react'

import CopyBox from '../copy-box'
import Container from '../../container'

export default ({ html }) => (
  <Container py={6}>
    <CopyBox
      px={3}
      py={4}
      dangerouslySetInnerHTML={{ __html: html }}
      textAlign='center'
    />
  </Container>
)