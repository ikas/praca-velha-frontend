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

const GridWrapper = styled.div`
  ${layout}
  ${space}
  width: 33%;

  @media(max-width: ${props => props.theme.breakpoints.md}) {
    width: 100%;
    margin-bottom: ${props => props.theme.space[4]}px;
  }
`

export default ({ mainImage, slug }) => (
  <GridWrapper>
    <Construction to={`/${slug}`} mx={3} bg="white" pb={3}>
      <Img fluid={mainImage.fluid} />
    </Construction>
  </GridWrapper>
)
