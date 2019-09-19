import React from 'react'

import Box from '../box'
import Heading from '../heading'

export default ({ name, address, city, typologies }) => (
  <Box width={[1, 1/2]}>
    <Heading mt={0} mb={3}>{name}</Heading>
    <Heading my={3} level={5}>{address} | {city}</Heading>
    <Heading mt={0} level={5}>{typologies.join(' | ')}</Heading>
  </Box>
)
