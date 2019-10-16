import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import Box from '../../box'
import Container from '../../container'
import ConstructionCard from '../card'
import Heading from '../../heading'
import ContentSeparator from '../../content-separator'

const GridItem = styled(Box)`
  width: 33%;
  margin-bottom: ${props => props.theme.space[4]}px;

  @media(max-width: ${props => props.theme.breakpoints.md}) {
    width: 100%;
  }
`

export default ({ title, constructions, ...props }) => {
  const { t } = useTranslation()
  return constructions.length > 0 && (
    <Box {...props}>
      <Container>
        <Heading my={6} level={2} textAlign="center">{t(title)}</Heading>
        <Box display="flex" justifyContent="center" flexWrap="wrap" mb={7}>
          {constructions.map(({ node }) => (
            <GridItem key={node.id}><ConstructionCard {...node} /></GridItem>
          ))}
        </Box>
      </Container>
      <ContentSeparator />
    </Box>
  )
}