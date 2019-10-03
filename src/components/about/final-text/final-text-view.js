import React from 'react'

import CopyBox from '../copy-box'
import Container from '../../container'

export default ({ html }) => (
  <Container py={[6, 7]}>
    <CopyBox
      px={3}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  </Container>
)