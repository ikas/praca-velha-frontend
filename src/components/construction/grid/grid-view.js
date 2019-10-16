import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

import Anchor from '../../anchor'
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

const SeeMoreButton = styled(Anchor)`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.secondary};
  padding: ${props => props.theme.space[5]}px ${props => props.theme.space[7]}px;
  margin-top: ${props => props.theme.space[5]}px;
  margin-bottom: ${props => props.theme.space[6]}px;
  text-decoration: none;
`

export default ({
  title,
  constructions,
  hasSeeMoreButton = false,
  includeContentSeparator = true,
  ...props
}) => {
  const { t } = useTranslation()
  return constructions.length > 0 && (
    <Box {...props}>
      <Container>
        <Heading my={6} level={2} textAlign="center">{t(title)}</Heading>
        <Box display="flex" justifyContent="center" flexWrap="wrap" mb={hasSeeMoreButton ? 0 : 7}>
          {constructions.map(({ node }) => (
            <GridItem key={node.id}><ConstructionCard {...node} /></GridItem>
          ))}
        </Box>
        { hasSeeMoreButton && (
          <Box alignSelf="stretch" display="flex" justifyContent="center">
            <SeeMoreButton to={t('Buildings URL')}>{t('Home See All Buildings')}</SeeMoreButton>
          </Box>
        )}
      </Container>
      { includeContentSeparator && <ContentSeparator /> }
    </Box>
  )
}