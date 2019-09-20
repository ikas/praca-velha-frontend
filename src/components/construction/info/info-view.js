import React from 'react'

import Box from '../../box'
import Container from '../../container'
import Heading from '../../heading'

export default ({ name, address, city, typologies, secondaryImage }) => (
  <Box bg="primary">
    <Container>
      <Heading color="white" mt={0} mb={3}>{name}</Heading>
      <Heading color="white" my={3} level={5}>{address} | {city}</Heading>
      <Heading color="white" mt={0} level={5}>{typologies.join(' | ')}</Heading>
    </Container>
  </Box>
)
