import React from 'react'
import { useTranslation } from 'react-i18next'
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
  price,
  secondaryImage,
  secondDescription,
  typologies,
}) => {
  const { t } = useTranslation()
  const formattedPrice = parseFloat(Math.round(price * 100) / 100)
    .toFixed(2)
    .replace('.', ',')
    .replace(/^\d\d\d/g, x => x + ' ')

  return (
    <Box bg="primary">
      <Container py={7}>
        <Box display="grid" gridTemplateColumns="50% 50%" gridColumnGap={4} gridRowGap={6}>
          { secondaryImage && <StyledImage fixed={secondaryImage.fixed} /> }
          <Box display="flex" alignItems="center" justifyContent="center">
            <RichText textAlign="right" richText={firstDescription} />
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center">
            <RichText richText={secondDescription} />
          </Box>
          <Box display="flex" flexDirection="column" justifyContent="space-around">
            <Box>
              <Heading color="white" fontWeight="bold" textAlign="center" level={3} my={4}>{address}</Heading>
              <Heading color="white" fontWeight="bold" textAlign="center" level={3} mt={4} mb={2}>{city}</Heading>
            </Box>
            <Heading color="white" fontWeight="bold" textAlign="center" level={2} my={4}>{typologies.join(' | ')}</Heading>
          </Box>
        </Box>
        <Heading level={2} color="secondary" mb={0} mt={6} textAlign="center">{t('Construction Price Tag', { price: formattedPrice })}</Heading>
      </Container>
    </Box>
  )
}
