import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { layout, space } from 'styled-system'

import Copy from '../copy-text'
import Heading from '../heading'

const StyledHeading = styled(Heading)`
  text-align: center;
`

const StyledCopy = styled(Copy)`
  text-align: center;
`

const Construction = styled(Link)`
  ${layout}
  ${space}
  display: flex;
  flex-direction: column;
  width: 33%;
  box-shadow: 0px 0px 20px 0px ${props => props.theme.colors.blackVerySoftShade};
`

const ConstructionData = styled.div`
  ${layout}
  ${space}
`

export default ({
  address,
  city,
  mainImage,
  name,
  saleStatus,
  slug,
  typologies,
}) => (
  <Construction to={`/${slug}`} mx={3}>
    <Img fluid={mainImage.fluid} />
    <ConstructionData py={5}>
      <StyledHeading level={3} mt={0} mb={3}>{name}</StyledHeading>
      <StyledCopy mt={0} mb={1}>{address} | {city}</StyledCopy>
      <StyledCopy mt={0} mb={1}>{typologies.join(' ')}</StyledCopy>
      <StyledCopy my={0}>{saleStatus}</StyledCopy>
    </ConstructionData>
  </Construction>
)
