import React from 'react'

import CopyBox from '../copy-box'
import Box from '../../box'
import Container from '../../container'

export default ({ html }) => (
  <Box bg="primary" px={3} py={6}>
    <Container>
      <CopyBox
        color="white"
        textAlign="center"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Container>
  </Box>
)