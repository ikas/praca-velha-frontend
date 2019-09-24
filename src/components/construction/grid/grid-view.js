import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import Box from '../../box'
import Container from '../../container'
import ConstructionCard from '../card'
import Heading from '../../heading'
import ContentSeparator from '../../content-separator'

const StyledHeading = styled(Heading)`
  text-align: center;
`

const Constructions = styled(Box)`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`

const GridItem = styled(Box)`
  width: 33%;

  @media(max-width: ${props => props.theme.breakpoints.md}) {
    width: 100%;
    margin-bottom: ${props => props.theme.space[4]}px;
  }
`

export default ({ title, constructions }) => {
  const { t } = useTranslation()
  return constructions.length > 0 && (
    <Box bg="#eee">
      <ContentSeparator />
      <Container>
        <StyledHeading my={6} level={4}>{t(title)}</StyledHeading>
        <Constructions mb={7}>
          {constructions.map(({ node }) => (
            <GridItem key={node.id}><ConstructionCard {...node} /></GridItem>
          ))}
        </Constructions>
      </Container>
    </Box>
  )
}