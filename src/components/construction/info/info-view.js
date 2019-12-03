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

export default ({
  address,
  city,
  firstDescription,
  constructionPrice,
  secondaryImage,
  secondDescription,
  typologies,
}) => {
  return (
    <Box bg="primary">
      <Container py={[6, 7]}>
        <Box
          display="grid"
          mx={3}
          gridTemplateColumns={["100%", "49% 49%"]}
          gridColumnGap={3}
          gridRowGap={6}
          alignItems="center"
          justifyContent="center"
        >
          { secondaryImage && <StyledImage fixed={secondaryImage.fixed} /> }
          <Box display="flex" alignItems="center" justifyContent="center">
            <RichText textAlign={["left", "right"]} richText={firstDescription} />
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center">
            <RichText richText={secondDescription} />
          </Box>
          <Box display="flex" flexDirection="column" justifyContent="space-around">
            <Box>
              <Heading color="white" fontWeight="bold" textAlign="center" level={[4, 3]} my={4}>{address}</Heading>
              <Heading color="white" fontWeight="bold" textAlign="center" level={[4, 3]} mt={4} mb={2}>{city}</Heading>
            </Box>
            <Heading color="white" fontWeight="bold" textAlign="center" level={[3, 2]} my={4}>{typologies.join(' | ')}</Heading>
          </Box>
        </Box>
        <Heading level={[3, 2]} color="secondary" mb={0} mt={[5, 6]} textAlign="center">{constructionPrice}</Heading>
      </Container>
    </Box>
  )
}
