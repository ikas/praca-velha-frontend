import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { layout, space, color } from 'styled-system'

import Box from '../box'
import Copy from '../copy-text'
import Heading from '../heading'

const Construction = styled(Link)`
  ${layout}
  ${space}
  ${color}
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 20px 0px ${props => props.theme.colors.blackVerySoftShade};
`

const LogoWhite = styled.div`
  background-image: url('${props => props.imageUrl}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 100px;
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
      <Box flex={1}>{ logoWhite && <LogoWhite imageUrl={logoWhite.fluid.src} /> }</Box>
      <Box flex={2}>
        <Heading level={3} mt={0} mb={2} color="white">{typologies.join(' | ')}</Heading>
        <Copy color="white">{address} {city}</Copy>
      </Box>
    </Box>
  </Construction>
)
