import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'

import Box from '../../box'
import Container from '../../container'
import Heading from '../../heading'

import RichText from '../rich-text'

const StyledImage = styled(Image)`
  max-width: 100%;
  max-height: 400px;
`

const StyledContainer = styled(Container)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

export default ({ name, address, city, typologies, secondaryImage, firstDescription, secondDescription }) => (
  <Box bg="primary">
    <StyledContainer py={7}>
      <Box mx={4} my={4} width="45%">
        <StyledImage fixed={secondaryImage.fixed} />
      </Box>
      <Box mx={4} my={4} width="45%" display="flex" alignItems="center" justifyContent="center">
        <RichText textAlign="right" richText={firstDescription} />
      </Box>
      <Box mx={4} my={4} width="45%" display="flex" alignItems="center" justifyContent="center">
        <RichText richText={secondDescription} />
      </Box>
      <Box mx={4} my={4} width="45%" display="flex" flexDirection="column" justifyContent="space-around">
        <Box>
          <Heading color="white" fontWeight="bold" textAlign="center" level={3} my={4}>{address}</Heading>
          <Heading color="white" fontWeight="bold" textAlign="center" level={3} my={4}>{city}</Heading>
        </Box>
        <Heading color="white" fontWeight="bold" textAlign="center" level={2} my={4}>{typologies.join(' | ')}</Heading>
      </Box>
    </StyledContainer>
  </Box>
)
