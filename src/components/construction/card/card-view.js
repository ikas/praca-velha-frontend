import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { layout, space, color } from 'styled-system'

import Box from '../../box'
import Copy from '../../copy-text'
import Heading from '../../heading'
import Logo from '../logo'

const Construction = styled(Link)`
  ${layout}
  ${space}
  ${color}
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 20px 0px ${props => props.theme.colors.blackVerySoftShade};
`

const MainImage = styled.div`
  background-image: url('${props => props.imageUrl}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 250px;
`

export default ({ mainImage, logoWhite, slug, typologies = [], address, city }) => (
  <Construction to={`/${slug}`} mx={3} bg="black">
    <MainImage imageUrl={mainImage.fluid.src} />
    <Box display="flex" alignItems="center" style={{ minHeight: '150px' }} px={3}>
      <Box flex={1} display="flex" alignItems="center" justifyContent="center" mr={3}>
        { logoWhite && <Logo logo={logoWhite.fixed} /> }
      </Box>
      <Box flex={2} ml={2} display="flex" flexDirection="column" alignItems="flex-end">
        <Heading textAlign="right" level={4} mt={0} mb={2} color="white">{typologies.join(' | ')}</Heading>
        <Copy textAlign="right" color="white">{address}</Copy>
        <Copy textAlign="right" color="white">{city}</Copy>
      </Box>
    </Box>
  </Construction>
)
