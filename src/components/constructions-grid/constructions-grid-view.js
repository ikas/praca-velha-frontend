import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { color, layout, space } from 'styled-system'

import Container from '../container'
import ConstructionCard from '../construction-card'
import Heading from '../heading'
import ContentSeparator from '../content-separator'

const BackgroundWrapper = styled.div`
  ${color}
`

const StyledHeading = styled(Heading)`
  text-align: center;
`

const Constructions = styled.div`
  ${layout}
  ${space}
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`

export default ({ title, constructions }) => {
  const { t } = useTranslation()
  return constructions.length > 0 && (
    <BackgroundWrapper bg="#eee">
      <ContentSeparator />
      <Container>
        <StyledHeading px={3} my={6} level={4}>{t(title)}</StyledHeading>
        <Constructions mb={7}>
          {constructions.map(({ node }) => <ConstructionCard {...node} key={node.id} />)}
        </Constructions>
      </Container>
    </BackgroundWrapper>
  )
}