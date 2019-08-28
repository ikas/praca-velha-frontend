import React from 'react'
import { Link } from 'gatsby'
import { useTranslation } from 'react-i18next'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { layout, space, color } from 'styled-system'

import Container from '../container'
import Copy from '../copy-text'
import Heading from '../heading'

const BackgroundWrapper = styled.div`
  ${color}
`

const StyledHeading = styled(Heading)`
  text-align: center;
`

const StyledCopy = styled(Copy)`
  text-align: center;
`

const Constructions = styled.div`
  ${layout}
  ${space}
  display: flex;
`

const Construction = styled(Link)`
  ${layout}
  ${space}
  ${color}
  display: flex;
  flex-direction: column;
  width: 33%;
`

export default ({ constructions }) => {
  const { t } = useTranslation()
  return (
    <BackgroundWrapper bg="lightGrey">
      <Container>
        <StyledHeading px={3} my={6} level={4}>{t('Home Development Heading')}</StyledHeading>
        <Constructions mb={6}>
          {constructions.map(({ node }) => {
            return (
              <Construction to={`/${node.slug}`} key={node.id} mx={3} bg="white">
                <Img fluid={node.mainImage.fluid} />
                <StyledHeading level={3} mb={0}>{node.name}</StyledHeading>
                <StyledCopy mt={3} mb={0}>{node.address} | {node.city}</StyledCopy>
                <StyledCopy mt={3} mb={0}>{node.typologies.join(' ')}</StyledCopy>
                <StyledCopy my={3}>{node.saleStatus}</StyledCopy>
              </Construction>
            )
          })}
        </Constructions>
      </Container>
    </BackgroundWrapper>
  )
}