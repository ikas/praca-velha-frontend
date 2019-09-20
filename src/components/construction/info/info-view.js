import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'

import Box from '../../box'
import Container from '../../container'
import Heading from '../../heading'

const StyledImage = styled(Image)`
  max-width: 100%;
  max-height: 400px;
`

const StyledContainer = styled(Container)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

export default ({ name, address, city, typologies, secondaryImage }) => (
  <Box bg="primary">
    <StyledContainer pt={7}>
      <Box mx={3} width="45%">
        <StyledImage fixed={secondaryImage.fixed} />
      </Box>
      <Box mx={3} width="45%">
        <StyledImage fixed={secondaryImage.fixed} />
      </Box>
      <Box mx={3} width="45%">
        <StyledImage fixed={secondaryImage.fixed} />
      </Box>
      <Box mx={3} width="45%">
        <Heading color="white" mt={0} mb={3}>{name}</Heading>
        <Heading color="white" my={3} level={5}>{address} | {city}</Heading>
        <Heading color="white" mt={0} level={5}>{typologies.join(' | ')}</Heading>
      </Box>
    </StyledContainer>
  </Box>
)
