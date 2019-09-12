import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { layout, space, color } from 'styled-system'

const Construction = styled(Link)`
  ${layout}
  ${space}
  ${color}
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 20px 0px ${props => props.theme.colors.blackVerySoftShade};
`

export default ({ mainImage, slug }) => (
  <Construction to={`/${slug}`} mx={3} bg="white" pb={3}>
    <Img fluid={mainImage.fluid} />
  </Construction>
)
